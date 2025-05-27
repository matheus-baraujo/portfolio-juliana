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

foreach ($input['videos'] as $video) {
    $tempFile = $tempDir . basename($video);

    if (file_exists($tempFile)) {
        if (!unlink($tempFile)) {
            echo json_encode(['success' => false, 'message' => "Erro ao deletar $video"]);
            exit;
        }
    }
}

echo json_encode(['success' => true]);
