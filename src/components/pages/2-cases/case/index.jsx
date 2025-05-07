import React from 'react'
import styles from './styles.module.css'
import VideoCase from './videoCase'

const index = ({projeto, direction}) => {

  console.log(direction)

  return (
    <div className={ direction ? styles.case : styles.case2}>
      
      <div className={styles.info}>
        <h2>{projeto?.[0]}</h2>
        <p>{projeto?.[1]}</p>
      </div>
      
      {
        projeto?.[2].map((item, index) => {
          return (
            <VideoCase video={item} key={index}/>
          )
        })

      }

    </div>
  )
}

export default index