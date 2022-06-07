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
               "src": './food/1f.jpg',
               "alt": 'food picture 1',
          },
          {
               "src": './food/2f.jpg',
               "alt": 'food picture 2',
          },
          {
               "src": './food/3f.jpg',
               "alt": 'food picture 3',
          }
          ,
          {
               "src": './food/4f.jpg',
               "alt": 'food picture 4',
          },
          {
               "src": './food/5f.jpg',
               "alt": 'food picture 5',
          },
          {
               "src": './food/6f.jpg',
               "alt": 'food picture 6',
          },
          {
               "src": './food/7f.jpg',
               "alt": 'food picture 7',
          },
          {
               "src": './food/8f.jpg',
               "alt": 'food picture 8',
          },
          {
               "src": './food/9f.jpg',
               "alt": 'food picture 9',
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