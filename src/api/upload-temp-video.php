<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$uploadDir = __DIR__ . '/../uploads/temp/'; // pasta temporária, ajusta conforme seu caminho
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['video'])) {
    $file = $_FILES['video'];

    // Validações básicas
    $allowedTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    if (!in_array($file['type'], $allowedTypes)) {
        echo json_encode(['success' => false, 'message' => 'Tipo de arquivo não permitido.']);
        exit;
    }

    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'message' => 'Erro no upload.']);
        exit;
    }

    // Gera nome único para evitar conflito
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid('vid_', true) . '.' . $ext;
    $targetFile = $uploadDir . $filename;

    if (move_uploaded_file($file['tmp_name'], $targetFile)) {
        echo json_encode(['success' => true, 'filename' => $filename]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Falha ao mover arquivo.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Arquivo não enviado.']);
}
