'use client'

import React, { useState } from "react";
import styles from './styles.module.css';

import { ReactSortable } from "react-sortablejs";
import { useDropzone } from "react-dropzone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faUpload, faTrash} from '@fortawesome/free-solid-svg-icons';


const index = ({ txt, txt2, videos, setText, setText2, setarVideos }) => {

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
    }));
    setVideos((prev) => [...prev, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeVideo = (id) => {
    setVideos((prev) => prev.filter((video) => video.id !== id));
  };

  const handleReorder = (order) => {
    const newOrder = order.map((id) => videos.find((v) => v.id.toString() === id));
    setVideos(newOrder);
  };

  return (
    <div className={styles.editorContainer}>
      <h2 className={styles.editorTitle}>Linha 1</h2>

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>Texto 1</label>
        <textarea
          value={txt}
          onChange={(e) => setText(e.target.value)}
          className={styles.editorTextarea}
          rows={6}
        />
      </div>

      <div className={styles.editorSection}>
        <label className={styles.editorLabel}>Texto 2</label>
        <textarea
          value={txt2}
          onChange={(e) => setText2(e.target.value)}
          className={styles.editorTextarea}
          rows={6}
        />
      </div>

      <div className={styles.dropzoneContainer}>

        {
          videos.length === 0 ?
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            <p>
              <span>Fazer upload de até 03 arquivos <FontAwesomeIcon icon={faUpload} className={'fas fa-upload'} /></span> 
              <br/> 
              Ou arraste-os para esta área
            </p>
          </div>
          :
          <>  
            <p className={styles.dropzoneInstruction}>
              A ordem dos arquivos pode ser alterada arrastando e soltando
            </p>

            <ReactSortable list={videos} setList={setarVideos} animation={150} ghostClass={styles.dragging} className={styles.videoRow}>
              {videos.map((item) => (
                <div className={styles.videoItem} key={item.id} data-id={item.id}>
                  <p className={styles.videoName}>{item.name}</p>
                  <button className={styles.deleteButton} onClick={() => removeVideo(item.id)}><FontAwesomeIcon icon={faTrash} className={'fas fa-trash'} /></button>
                </div>
              ))}
            </ReactSortable>

            <div {...getRootProps()} className={styles.dropzoneSmall}>
              <input {...getInputProps()} />
              <p><FontAwesomeIcon icon={faUpload} className={'fas fa-upload'} /></p>
            </div>
          </>
        }

      </div>

      <button className={styles.submitButton}> <FontAwesomeIcon icon={faFloppyDisk} className={'fas fa-floppy-disk'} /> Alterar conteúdo</button>
    </div>
  );
};

export default index;
