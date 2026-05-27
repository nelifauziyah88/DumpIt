<?php

require_once '../db.php';
$conn = getConn();

$slug = trim($_GET['slug'] ?? '');

if (!$slug) {
    header('Location: ../index.php');
    exit;
}

$stmt = mysqli_prepare($conn, 'SELECT slug, flipbook_file FROM scrapbooks WHERE slug = ? LIMIT 1');

if (!$stmt) {
    die('Prepare failed: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, 's', $slug);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);
$data = mysqli_fetch_assoc($result);

mysqli_stmt_close($stmt);
mysqli_close($conn);

if (!$data) {
    header('Location: ../index.php?notfound=1');
    exit;
}

$allowedFiles = [
    'flipbook1.php',
    'flipbook2.php',
    'flipbook3.php',
    'flipbook4.php',
    'flipbook5.php',
    'flipbook6.php',
];

$flipbookFile = $data['flipbook_file'];

if (!in_array($flipbookFile, $allowedFiles, true)) {
    header('Location: ../index.php?file_error=1');
    exit;
}

header('Location: ../' . $flipbookFile . '?slug=' . urlencode($slug));
exit;