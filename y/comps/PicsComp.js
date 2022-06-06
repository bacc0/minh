import styles from './PicsComp.module.scss';
import { useEffect, useState } from 'react';
import ImgHandleInView from './Img_handle_inview';


const PicsComp = () => {

     const [grayscale, setGrayscale] = useState('40%');

     useEffect(() => {
          setGrayscale('0%')
     }, []);

     const dataImages = [
          {
               "src": './1p_xs.jpg',
               "alt": 'food picture one',
          },
          {
               "src": './2p_xs.jpg',
               "alt": 'food picture two',
          },
          {
               "src": './3p_xs.jpg',
               "alt": 'food picture three',
          }
          ,
          {
               "src": './4p_xs.jpg',
               "alt": 'food picture three',
          },
          {
               "src": './5p_xs.jpg',
               "alt": 'food picture three',
          },
          {
               "src": './6p_xs.jpg',
               "alt": 'food picture three',
          },
          {
               "src": './7p_xs.jpg',
               "alt": 'food picture three',
          },
          {
               "src": './8p_xs.jpg',
               "alt": 'food picture three',
          },
          {
               "src": './9p_xs.jpg',
               "alt": 'food picture three',
          }
     ]


     return (
          <div
               className={styles.container}
               style={{
                    '-webkit-filter': `grayscale(${grayscale})`,
                    filter: `grayscale(${grayscale})`,
                    transition: 'filter 3s',
               }}
          >
               {
                    dataImages.map((el) =>
                         <>

                            {/*  <ImgHandleInView
                                   src={el.src}
                                   alt={el.alt}
                                   // width={130}
                                   borderRadius={11}
                                   style={`${styles.images_menu}`}
                              />*/}
                               <img
                                   src={el.src}
                                   className={`${styles.images_menu}`}
                                   alt={el.alt}
                              /> 

                         </>
                    )
               }
          </div>
     )
};

export default PicsComp;