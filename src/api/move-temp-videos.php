<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
if (!$input || !isset($input['videos']) || !is_array($input['videos'])) {
    echo json_encode(['success' => false, 'message' => 'Dados inválidos']);
    exit;
}

$tempDir = __DIR__ . '/../uploads/temp/';
$finalDir = __DIR__ . '/../videos/';

if (!is_dir($finalDir)) {
    mkdir($finalDir, 0755, true);
}

foreach ($input['videos'] as $video) {
    $tempFile = $tempDir . basename($video);
    $finalFile = $finalDir . basename($video);

    if (file_exists($tempFile)) {
        if (!rename($tempFile, $finalFile)) {
            echo json_encode(['success' => false, 'message' => "Erro ao mover $video"]);
            exit;
        }
    } else {
        echo json_encode(['success' => false, 'message' => "$video não encontrado"]);
        exit;
    }
}

echo json_encode(['success' => true]);
