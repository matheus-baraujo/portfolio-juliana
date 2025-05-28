<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
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
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

$data = json_decode(file_get_contents("php://input"), true);
$id = $data['id'] ?? null;

if (!$id) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'ID não fornecido.']);
    exit;
}

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // 1. Buscar os vídeos do case
    $stmt = $pdo->prepare("SELECT videos FROM cases WHERE id = :id");
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch();

    if ($row && !empty($row['videos'])) {
        $videos = json_decode($row['videos'], true);

        foreach ($videos as $video) {
            if (!empty($video['name'])) {
                // Ajuste o caminho da pasta onde os vídeos estão
                $filePath = __DIR__ . '/../videos/' . $video['name'];

                if (file_exists($filePath)) {
                    unlink($filePath);
                }
            }
        }
    }

    // 2. Deletar a ordem do case na tabela cases_ordem
    $stmtOrder = $pdo->prepare("DELETE FROM cases_ordem WHERE id = :id");
    $stmtOrder->execute([':id' => $id]);

    // 3. Deletar o case na tabela principal
    $stmt = $pdo->prepare("DELETE FROM cases WHERE id = :id");
    $stmt->execute([':id' => $id]);

    echo json_encode(['success' => true]);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro ao deletar: ' . $e->getMessage()]);
}
