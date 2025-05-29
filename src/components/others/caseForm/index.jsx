'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';

import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faUpload, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const VideoItem = ({ id, name, onRemove, onMoveUp, onMoveDown, isFirst, isLast }) => {
  const [useTempPath, setUseTempPath] = useState(false);

  const videoSrc = useTempPath
    ? `${process.env.NEXT_PUBLIC_URL}/uploads/temp/${name}`
    : `${process.env.NEXT_PUBLIC_URL}/videos/${name}`;

  const handleVideoError = () => {
    setUseTempPath(prev => !prev);
  };

  return (
    <div className={styles.videoItem}>
      <video src={videoSrc} onError={handleVideoError} />
      <p className={styles.videoName}>{name}</p>
      <div className={styles.buttonsContainer}>
        <button className={styles.moveButton} onClick={() => onMoveUp(id)} disabled={isFirst} title="Subir">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button className={styles.moveButton} onClick={() => onMoveDown(id)} disabled={isLast} title="Descer">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className={styles.deleteButton} onClick={() => onRemove(id)} title="Remover">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

const Index = ({onReturn}) => {
  const [localVideos, setLocalVideos] = useState([]);
  const [localTxt, setLocalTxt] = useState('');
  const [localTxt2, setLocalTxt2] = useState('');

  // Upload para pasta temp via API
  const uploadTempVideo = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload-temp-video.php`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      return data.success ? data.filename : null;
    } catch {
      alert('Erro no upload do vídeo');
      return null;
    }
  };

  const onDrop = async (acceptedFiles) => {
    if (localVideos.length + acceptedFiles.length > 3) {
      alert('Você só pode adicionar até 3 vídeos.');
      return;
    }

    for (const file of acceptedFiles) {
      const filename = await uploadTempVideo(file);
      if (filename) {
        setLocalVideos((prev) => [
          ...prev,
          { id: (Date.now() + Math.random()).toString(), name: filename, temp: true },
        ]);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    multiple: true,
  });

  const handleRemove = (id) => {
    setLocalVideos((prev) => prev.filter(video => video.id !== id));
  };

  const moveItem = (id, direction) => {
    setLocalVideos((prev) => {
      const index = prev.findIndex(v => v.id === id);
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;

      const newVideos = [...prev];
      [newVideos[index], newVideos[newIndex]] = [newVideos[newIndex], newVideos[index]];
      return newVideos;
    });
  };

  const handleSave = async () => {
    const tempVideos = localVideos.filter(v => v.temp).map(v => v.name);

    if (tempVideos.length > 0) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/move-temp-videos.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos: tempVideos }),
      });
      const data = await res.json();
      if (!data.success) {
        alert('Erro ao salvar vídeos');
        return;
      }
    }

    const finalVideos = localVideos.map(v => ({ id: v.id, name: v.name }));

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/add-case.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text1: localTxt,
        text2: localTxt2,
        videos: finalVideos,
      }),
    });

    const data = await res.json();
    if (!data.success) {
      alert('Erro ao atualizar banco de dados');
    }
  };

  const cancelEdit = async () => {
    const tempVideos = localVideos.filter(v => v.temp).map(v => v.name);
    if (tempVideos.length > 0) {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/delete-temp-videos.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos: tempVideos }),
      });
    }

    setLocalVideos([]);
    setLocalTxt('');
    setLocalTxt2('');
    onReturn(2); // Volta para a página de cases
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <h2 className={styles.editorTitle}>Novo Case</h2>
      </div>

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>Título</label>
        <textarea
          value={localTxt}
          placeholder="Digite o título aqui..."
          onChange={(e) => setLocalTxt(e.target.value)}
          className={styles.editorTextarea}
          rows={3}
        />
      </div>

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>Texto</label>
        <textarea
          value={localTxt2}
          placeholder="Digite o texto aqui..."
          onChange={(e) => setLocalTxt2(e.target.value)}
          className={styles.editorTextarea}
          rows={3}
        />
      </div>

      <div className={styles.dropzoneContainer}>
        {localVideos.length === 0 ? (
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            <p>
              <span>
                Fazer upload de até 03 arquivos <FontAwesomeIcon icon={faUpload} />
              </span>
              <br />
              Ou arraste-os para esta área
            </p>
          </div>
        ) : (
          <>
            <p className={styles.dropzoneInstruction}>
              Use os botões para alterar a ordem dos arquivos
            </p>
            <div className={styles.videoRow}>
              {localVideos.map((video, idx) => (
                <VideoItem
                  key={video.id}
                  id={video.id}
                  name={video.name}
                  onRemove={handleRemove}
                  onMoveUp={() => moveItem(video.id, 'up')}
                  onMoveDown={() => moveItem(video.id, 'down')}
                  isFirst={idx === 0}
                  isLast={idx === localVideos.length - 1}
                />
              ))}
            </div>
            <div {...getRootProps()} className={styles.dropzoneSmall}>
              <input {...getInputProps()} />
              <p><FontAwesomeIcon icon={faUpload} /></p>
            </div>
          </>
        )}
      </div>

      <div className={`${styles.submitContainer} ${styles.editableContainer}`}>
        <button className={styles.submitButton} onClick={handleSave}>
          <FontAwesomeIcon icon={faFloppyDisk} /> Salvar conteúdo
        </button>
        <button className={styles.cancelButton} onClick={cancelEdit}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Index;
