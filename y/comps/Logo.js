import { useEffect, useState } from 'react';
import styles from './Logo.module.scss';


const Logo = () => {
     
     const [top, setTop] = useState(-16);

     useEffect(() => {
          setInterval(() => {
               setTop(0);
          }, 200);
     }, []);


     return (
          <div
               style={{
                    position: 'relative',
                    top: top,
                    transition:'top .6s',
                    height: 92
               }}
               className={styles.logo_container}
          >
               <img
                    src={'./logo.svg'}
                    className={styles.logo}
                    alt="logo Minh Pan asian restaurant"
               />
          </div>
     )
};

export default Logo;