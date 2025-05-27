<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

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

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'] ?? null;
$texto1 = $data['text1'] ?? '';
$texto2 = $data['text2'] ?? '';
$videos = $data['videos'] ?? [];

if (!$id || !is_array($videos)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Dados inválidos.']);
    exit;
}

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $videosJson = json_encode($videos);

    $stmt = $pdo->prepare("UPDATE caseshome SET texto1 = :texto1, texto2 = :texto2, videos = :videos WHERE id = :id");
    $stmt->execute([
        ':texto1' => $texto1,
        ':texto2' => $texto2,
        ':videos' => $videosJson,
        ':id' => $id
    ]);

    echo json_encode(['success' => true]);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro ao atualizar: ' . $e->getMessage()]);
}
