<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

require_once '../db.php';
$conn = getConn();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$nama_kamu     = trim($_POST['nama_kamu'] ?? '');
$nama_pasangan = trim($_POST['nama_pasangan'] ?? '');
$flipbook_file = trim($_POST['flipbook_file'] ?? 'flipbook1.php');

$allowedFiles = [
    'flipbook1.php',
    'flipbook2.php',
    'flipbook3.php',
    'flipbook4.php',
    'flipbook5.php',
    'flipbook6.php',
];

if (!in_array($flipbook_file, $allowedFiles, true)) {
    echo json_encode(['success' => false, 'message' => 'File flipbook tidak valid']);
    exit;
}

if (!$nama_kamu || !$nama_pasangan) {
    echo json_encode(['success' => false, 'message' => 'Nama kamu dan nama pasangan wajib diisi']);
    exit;
}

function buatSlug(string $nama_kamu, string $nama_pasangan): string {
    $n1 = substr(strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $nama_kamu)), 0, 8) ?: 'user';
    $n2 = substr(strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $nama_pasangan)), 0, 8) ?: 'partner';
    $rand = substr(bin2hex(random_bytes(3)), 0, 5);

    return $n1 . '-' . $n2 . '-' . $rand;
}

function slugUnik($conn, string $slug): bool {
    $stmt = mysqli_prepare($conn, 'SELECT id FROM scrapbooks WHERE slug = ?');

    if (!$stmt) {
        return true;
    }

    mysqli_stmt_bind_param($stmt, 's', $slug);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    $ada = mysqli_stmt_num_rows($stmt) > 0;

    mysqli_stmt_close($stmt);

    return $ada;
}

do {
    $slug = buatSlug($nama_kamu, $nama_pasangan);
} while (slugUnik($conn, $slug));

$uploadDir = '../uploads/' . $slug . '/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$allowed = ['jpg', 'jpeg', 'png', 'webp'];
$fotoPaths = [
    'cover' => null,
    'photos' => [],
];

if (!empty($_FILES['cover']['name']) && $_FILES['cover']['error'] === UPLOAD_ERR_OK) {
    $ext = strtolower(pathinfo($_FILES['cover']['name'], PATHINFO_EXTENSION));

    if (in_array($ext, $allowed, true)) {
        $dest = $uploadDir . 'cover.' . $ext;

        if (move_uploaded_file($_FILES['cover']['tmp_name'], $dest)) {
            $fotoPaths['cover'] = 'uploads/' . $slug . '/cover.' . $ext;
        }
    }
}

if (!empty($_FILES['photos'])) {
    $total = count($_FILES['photos']['name']);

    for ($i = 0; $i < min($total, 9); $i++) {
        if ($_FILES['photos']['error'][$i] !== UPLOAD_ERR_OK) {
            continue;
        }

        $ext = strtolower(pathinfo($_FILES['photos']['name'][$i], PATHINFO_EXTENSION));

        if (!in_array($ext, $allowed, true)) {
            continue;
        }

        $filename = 'foto' . $i . '.' . $ext;
        $dest = $uploadDir . $filename;

        if (move_uploaded_file($_FILES['photos']['tmp_name'][$i], $dest)) {
            $fotoPaths['photos'][] = 'uploads/' . $slug . '/' . $filename;
        }
    }
}

$fotoJson = json_encode($fotoPaths);

$stmt = mysqli_prepare(
    $conn,
    'INSERT INTO scrapbooks (nama_kamu, nama_pasangan, slug, flipbook_file, foto) 
     VALUES (?, ?, ?, ?, ?)'
);

if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . mysqli_error($conn)]);
    mysqli_close($conn);
    exit;
}

mysqli_stmt_bind_param(
    $stmt,
    'sssss',
    $nama_kamu,
    $nama_pasangan,
    $slug,
    $flipbook_file,
    $fotoJson
);

if (mysqli_stmt_execute($stmt)) {
    $id = mysqli_insert_id($conn);

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

    echo json_encode([
        'success'       => true,
        'slug'          => $slug,
        'id'            => $id,
        'flipbook_file' => $flipbook_file,
        'link'          => $flipbook_file . '?slug=' . $slug,
        'share'         => 's/' . $slug,
        'foto'          => $fotoPaths,
    ]);
} else {
    $err = mysqli_error($conn);

    mysqli_stmt_close($stmt);
    mysqli_close($conn);

    echo json_encode(['success' => false, 'message' => 'Gagal menyimpan: ' . $err]);
}