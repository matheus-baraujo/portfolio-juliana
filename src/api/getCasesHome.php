<?php
// config.php - configurações básicas de conexão
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000'); // Permite o front-end do Next.js

$host = 'localhost';
$db   = 'soul-juliana';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Supondo que você só vai ter 2 entradas, e quer pegar todas
    $stmt = $pdo->query("SELECT id, text1, text2, videos_json FROM videos_section");
    $result = $stmt->fetchAll();

    header('Content-Type: application/json');
    echo json_encode($result);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro de conexão: ' . $e->getMessage()]);
}
