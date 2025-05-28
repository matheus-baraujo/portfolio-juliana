'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faUpload, faTrash, faArrowUp, faArrowDown, faEdit } from '@fortawesome/free-solid-svg-icons';

const VideoItem = ({ id, name, onRemove, onMoveUp, onMoveDown, isFirst, isLast, editable }) => {

  const [useTempPath, setUseTempPath] = useState(false);

  const videoSrc = useTempPath
    ? `${process.env.NEXT_PUBLIC_URL}/uploads/temp/${name}`
    : `${process.env.NEXT_PUBLIC_URL}/videos/${name}`;

  const handleVideoError = () => {
    if (!useTempPath) {
      setUseTempPath(true);
    }else{
      setUseTempPath(false);
    }
  };

  return (
    <div className={styles.videoItem}>
      <video src={videoSrc} onError={handleVideoError} />
      <p className={styles.videoName}>{name}</p>
      {editable && (
        <div className={styles.buttonsContainer}>
          <button 
            className={styles.moveButton} 
            onClick={() => onMoveUp(id)} 
            disabled={isFirst}
            title="Subir"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button 
            className={styles.moveButton} 
            onClick={() => onMoveDown(id)} 
            disabled={isLast}
            title="Descer"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <button 
            className={styles.deleteButton} 
            onClick={() => onRemove(id)} 
            title="Remover"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
  );
};

const Index = ({ number, txt, txt2, videos, setText, setText2, setarVideos, home, onDelete , onMoveUp, onMoveDown, inFirst, inLast }) => {
  const [editable, setEditable] = useState(false);
  const [localVideos, setLocalVideos] = useState(videos);      // vídeos que o usuário está editando
  const [originalVideos, setOriginalVideos] = useState(videos); // cópia para restaurar se cancelar

  const [id, setId] = useState(number);

  const [localTxt, setLocalTxt] = useState(txt);
  const [localTxt2, setLocalTxt2] = useState(txt2);
  const [originalTxt, setOriginalTxt] = useState(txt);
  const [originalTxt2, setOriginalTxt2] = useState(txt2);

  useEffect(() => {
    if (!editable) {
      // Sincroniza com props quando não estiver editando
      setLocalVideos(videos);
      setOriginalVideos(videos);
      setLocalTxt(txt);
      setLocalTxt2(txt2);
      setOriginalTxt(txt);
      setOriginalTxt2(txt2);
    }
  }, [videos, txt, txt2, editable]);

  // Upload para pasta temp via API
  const uploadTempVideo = async (file) => {
    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload-temp-video.php`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        return data.filename;
      } else {
        alert('Falha no upload do vídeo');
        return null;
      }
    } catch (e) {
      alert('Erro no upload do vídeo');
      return null;
    }
  };

  // onDrop recebe arquivos, envia para backend e atualiza estado local
  const onDrop = async (acceptedFiles) => {
    if (!editable) return;

    if (localVideos.length + acceptedFiles.length > 3) {
      alert('Você só pode adicionar até 3 vídeos.');
      return;
    }

    for (const file of acceptedFiles) {
      const filename = await uploadTempVideo(file);
      if (filename) {
        setLocalVideos((prev) => [
          ...prev,
          { id: (Date.now() + Math.random()).toString(), name: filename, temp: true }
        ]);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    multiple: true,
    disabled: !editable,
  });

  const handleRemove = (id) => {
    if (!editable) return;
    setLocalVideos((prev) => prev.filter(video => video.id !== id));
  };

  const moveItem = (id, direction) => {
    if (!editable) return;

    setLocalVideos((prev) => {
      const index = prev.findIndex(v => v.id === id);
      if (index === -1) return prev;

      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= prev.length) return prev;

      const newVideos = [...prev];
      [newVideos[index], newVideos[newIndex]] = [newVideos[newIndex], newVideos[index]];

      return newVideos;
    });
  };

  // Salvar alterações: move arquivos temporários para permanentes via API e atualiza estado pai
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

    var url = '';
    home ?  url = `${process.env.NEXT_PUBLIC_URL}/api/update-case-line.php` : url = `${process.env.NEXT_PUBLIC_URL}/api/update-case.php`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id, // substitua por props.id se necessário
        text1: localTxt,
        text2: localTxt2,
        videos: finalVideos,
      }),
    });


    const data = await res.json();
    if (!data.success) {
      alert('Erro ao atualizar banco de dados');
      return;
    }

    setarVideos(finalVideos);
    setText(localTxt);
    setText2(localTxt2);
    setEditable(false);
  };

  // Cancelar edição: deleta vídeos temporários via API e restaura estado original
  const cancelEdit = async () => {
    const tempVideos = localVideos.filter(v => v.temp).map(v => v.name);

    if (tempVideos.length > 0) {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/api/delete-temp-videos.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videos: tempVideos }),
      });
    }

    setLocalVideos(originalVideos);
    setLocalTxt(originalTxt);
    setLocalTxt2(originalTxt2);
    setEditable(false);
  };

  // Alterna modo edição
  const toggleEdit = () => {
    if (editable) {
      handleSave();
    } else {
      // entra modo edição salvando originais
      setOriginalVideos(localVideos);
      setOriginalTxt(localTxt);
      setOriginalTxt2(localTxt2);
      setEditable(true);
    }
  };

  return (
    <div className={styles.editorContainer}>

      <div  className={styles.editorHeader}>
        
        {home? 
          <h2 className={styles.editorTitle}>Linha {number}</h2>
          : 
          <>
            <div className={styles.editorOrder}>
              <h2 className={styles.editorTitle +' '+styles.editorSpace }>Case {number}</h2>
              <button className={styles.moveButton}  onClick={onMoveUp} disabled={inFirst} title="Subir">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <button className={styles.moveButton} onClick={onMoveDown} disabled={inLast} title="Descer">
                <FontAwesomeIcon icon={faArrowDown} />
              </button>

              <p>Reordenar</p>
            </div>
            
          </>
        }
      </div>
      

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>{home? 'Texto 1' : 'Título'}</label>
        <textarea
          value={localTxt}
          onChange={(e) => editable && setLocalTxt(e.target.value)}
          className={styles.editorTextarea}
          rows={3}
          readOnly={!editable}
        />
      </div>

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>{home? 'Texto 2' : 'Texto'}</label>
        <textarea
          value={localTxt2}
          onChange={(e) => editable && setLocalTxt2(e.target.value)}
          className={styles.editorTextarea}
          rows={3}
          readOnly={!editable}
        />
      </div>

      <div className={styles.dropzoneContainer}>
        {localVideos.length === 0 ? (
          <div {...getRootProps()} className={`${styles.dropzone} ${!editable ? styles.disabledDropzone : ''}`}>
            <input {...getInputProps()} />
            <p>
              <span>Fazer upload de até 03 arquivos <FontAwesomeIcon icon={faUpload} /></span>
              <br />
              Ou arraste-os para esta área
            </p>
          </div>
        ) : (
          <>
            {
              editable &&
                <p className={styles.dropzoneInstruction}>
                  Use os botões para alterar a ordem dos arquivos
                </p>

            }

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
                  editable={editable}
                />
              ))}
            </div>

            {editable && (
              <div {...getRootProps()} className={styles.dropzoneSmall}>
                <input {...getInputProps()} />
                <p><FontAwesomeIcon icon={faUpload} /></p>
              </div>
            )}
          </>
        )}
      </div>

      <div className={editable?  styles.submitContainer +' '+ styles.editableContainer : styles.submitContainer}>

          {home?
            <></>
            :
            <button className={styles.removeButton} onClick={() => {
              if (confirm("Tem certeza que deseja deletar este case?")) {
                onDelete();
              }
            }} disabled={editable}>
              <FontAwesomeIcon icon={faTrash} /> Remover Case
            </button>
            
          }
          
          
          <button className={styles.submitButton} onClick={toggleEdit}>
            <FontAwesomeIcon icon={editable ? faFloppyDisk : faEdit} /> {editable ? 'Salvar conteúdo' : 'Alterar conteúdo'}
          </button>

          {editable && (
            <button className={styles.cancelButton} onClick={cancelEdit}>
              Cancelar
            </button>
          )}
        
      </div>
    </div>
  );
};

export default Index;
