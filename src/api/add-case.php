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

$texto1 = $data['text1'] ?? '';
$texto2 = $data['text2'] ?? '';
$videos = $data['videos'] ?? [];

if (!is_array($videos)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Formato de vídeos inválido.']);
    exit;
}

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    // Insere o novo case
    $videosJson = json_encode($videos);
    $stmt = $pdo->prepare("INSERT INTO cases (titulo, texto, videos) VALUES (:texto1, :texto2, :videos)");
    $stmt->execute([
        ':texto1' => $texto1,
        ':texto2' => $texto2,
        ':videos' => $videosJson
    ]);

    $caseId = $pdo->lastInsertId();

    // Define a próxima posição de ordem
    $stmt = $pdo->query("SELECT MAX(ordem) AS max_ordem FROM cases_ordem");
    $row = $stmt->fetch();
    $novaOrdem = ($row && $row['max_ordem'] !== null) ? ((int)$row['max_ordem'] + 1) : 1;

    // Insere o novo case na tabela de ordem
    $stmt = $pdo->prepare("INSERT INTO cases_ordem (id, ordem) VALUES (:id, :ordem)");
    $stmt->execute([
        ':id' => $caseId,
        ':ordem' => $novaOrdem
    ]);

    echo json_encode(['success' => true, 'id' => $caseId]);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro ao adicionar: ' . $e->getMessage()]);
}
