<?php

function getConn() {
    $conn = mysqli_connect('localhost', 'root', '', 'dumpit');

    if (!$conn) {
        die(json_encode([
            'success' => false,
            'message' => 'Koneksi database gagal: ' . mysqli_connect_error()
        ]));
    }

    mysqli_set_charset($conn, 'utf8mb4');
    return $conn;
}