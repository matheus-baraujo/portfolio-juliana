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

$usuario = $data['usuario'] ?? '';
$senha = $data['senha'] ?? '';

if ($usuario == '' || $senha == '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Dados inválidos.']);
    exit;
}

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $stmt = $pdo->prepare("SELECT * FROM admin WHERE login = :user");
    $stmt->execute([':user' => $usuario]);
    $user = $stmt->fetch();

    $tempPass = $senha;
    for ($i = 0; $i < 10; $i++) {
      $tempPass = md5($tempPass.$user['salt']);
    }

    if ($tempPass === $user['hash']) {
        echo json_encode(['success' => true, 'user' => $user]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Credenciais inválidas.']);
    }

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro ao conectar ao banco de dados: ' . $e->getMessage()]);
}

