<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = 'localhost';
$db   = 'soul-juliana';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $ordens = json_decode(file_get_contents("php://input"), true);

    // Verifica se cada case já está presente na tabela cases_ordem
    $checkStmt = $pdo->prepare("SELECT COUNT(*) FROM cases_ordem WHERE id = :id");
    $insertStmt = $pdo->prepare("INSERT INTO cases_ordem (id, ordem) VALUES (:id, :ordem)");
    $updateStmt = $pdo->prepare("UPDATE cases_ordem SET ordem = :ordem WHERE id = :id");

    foreach ($ordens as $item) {
        $checkStmt->execute([':id' => $item['id']]);
        $exists = $checkStmt->fetchColumn() > 0;

        if ($exists) {
            $updateStmt->execute([':ordem' => $item['ordem'], ':id' => $item['id']]);
        } else {
            $insertStmt->execute([':id' => $item['id'], ':ordem' => $item['ordem']]);
        }
    }

    echo json_encode(['success' => true]);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
