<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once '../db.php';
$conn = getConn();

$slug = trim($_GET['slug'] ?? '');

if (!$slug) {
    echo json_encode(['success' => false, 'message' => 'Slug tidak ditemukan']);
    exit;
}

$stmt = mysqli_prepare(
    $conn,
    'SELECT id, nama_kamu, nama_pasangan, slug, flipbook_file, foto, created_at 
     FROM scrapbooks 
     WHERE slug = ? 
     LIMIT 1'
);

if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . mysqli_error($conn)]);
    exit;
}

mysqli_stmt_bind_param($stmt, 's', $slug);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_assoc($result);

mysqli_stmt_close($stmt);
mysqli_close($conn);

if (!$row) {
    echo json_encode(['success' => false, 'message' => 'Scrapbook tidak ditemukan']);
    exit;
}

$foto = json_decode($row['foto'], true) ?? [];

echo json_encode([
    'success'       => true,
    'id'            => $row['id'],
    'nama_kamu'     => $row['nama_kamu'],
    'nama_pasangan' => $row['nama_pasangan'],
    'slug'          => $row['slug'],
    'flipbook_file' => $row['flipbook_file'],
    'cover'         => $foto['cover'] ?? null,
    'photos'        => $foto['photos'] ?? [],
    'created_at'    => $row['created_at'],
]);