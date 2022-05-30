import styles from './PicsComp.module.scss';
import { useEffect, useState } from 'react';


const PicsComp = () => {

     // const [movement, setMovement] = useState(-8);
     const [grayscale, setGrayscale] = useState('100%');

     // useEffect(() => {
     //      setInterval(() => {
     //           setMovement(0);
     //      }, 100);
     // }, []);

     useEffect(() => {
               setGrayscale('0%')
     }, []);

     const imgFirst = (
          
               <img
                    src={'./1p_xs.jpg'}
                    className={`${styles.images_menu} ${styles.first_child}`}
                    alt="food picture one"
               />
     );


     const imgMid = (
          <img
               src={'./2p_xs.jpg'}
               className={styles.images_menu}
               alt="food picture two"
          />
     );


     const imgLast = (
               <img
                    src={'./3p_xs.jpg'}
                    className={`${styles.images_menu} ${styles.last_child}`}
                    alt="food picture three"
               />
     );

     return (
          <div 
          className={styles.container}
             style={{
               '-webkit-filter': `grayscale(${grayscale})`,
               filter: `grayscale(${grayscale})`,
               transition: 'filter 3s',
             }}
          >
               {imgFirst}
               {imgMid}
               {imgLast}
          </div>
     )
};

export default PicsComp;