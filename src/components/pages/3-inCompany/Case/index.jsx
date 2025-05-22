'use client'

import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'

import Title2 from './title2'

import Imgs1 from './imgs1'
import Imgs2 from './imgs2'
import Imgs3 from './imgs3'

import { useMediaQuery } from 'react-responsive';

const index = ({odd, number, title, items}) => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (!isClient) return null; // Evita render no SSR

  return (
    <>
    {
      odd ? 
      <>
        <img className={styles.star +' '+ styles.star1} src="icons/star.png" alt="" />

        <div className={styles.col}>
          <Title2 minor={title[0]} major={title[1]} span={title[2]}/>

          {
            isMobile ?
            <div className={styles.info}>

              {
                items.map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
            :
              number == 2 ?
              <Imgs3 mobile={isMobile}/>
              :
              <Imgs1 mobile={isMobile}/>
          }
          
        </div>

        <div className={styles.col}>
          
          {
            isMobile ? 
              number == 2 ?
              <Imgs3 mobile={isMobile}/>
              :
              <Imgs1 mobile={isMobile}/>
            :
            <div className={styles.info}>

              {
                items.map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
          }
        </div>
      </> 
      : 
      <>
        <img className={styles.star +' '+ styles.star2} src="icons/star.png" alt="" />
    
        <div className={styles.col}>

          {
            isMobile ?
            <Imgs2 mobile={isMobile}/>
            :
            <div className={styles.info}>

              {
                items.map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
          }

        </div>

        <div className={styles.col}>
          <Title2 minor={title[0]} major={title[1]} span={title[2]}/>

          {
            isMobile ?
            <div className={styles.info}>

              {
                items.map((item, index) => {
                  return(
                    <div className={styles.item} key={index}>
                      <img src="icons/star2.png" alt="" />
                      <p>{item}</p>
                    </div>
                  )
                })
              }

            </div>
            :
            <Imgs2 mobile={isMobile}/>
          }

          
        </div>
      </>
    }
      
    </>
  )
}

export default index