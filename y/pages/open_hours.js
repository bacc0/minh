

import { useEffect, useState } from 'react';
import QRcode from '../comps/QRcode';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import OpeningTimesTable from '../comps/OpeningTimesTable';


const Open_Hours = () => {

     const [topMenu, setTopMenu] = useState(26);
     const [opacity, setOpacity] = useState(0);

     useEffect(() => {
          setInterval(() => {
               setTopMenu(0);
               setOpacity(1)
          }, 100);
     }, []);

     return (


          <div className={`${styles.grid} ${styles.center_item}`}>
               <div
                    style={{
                         opacity: opacity,
                         transition: 'opacity 1.4s'
                    }}
               >
                    <div className={styles.textQR} >
                         <div style={{position: 'relative', top: 5}}>
                         <div
                              style={{
                                   position: 'relative',
                                   bottom: topMenu,
                                   transition: 'bottom 0.8s',
                              }}
                         >
                              <div>
                                   <strong>Opening Times</strong>
                              </div>
                              <hr className={styles.hr}/>
                              <div>We take last orders at 9:00pm.</div>
                              
                         </div>
                         </div>
                    </div>
                    <div
                         style={{
                              display: 'flex',
                              justifyContent: 'center',
                              position: 'relative',
                              top: topMenu,
                              transition: 'top 0.8s',
                         }}
                    >
                         <OpeningTimesTable />
                    </div>
               </div>
                    <Link href={'/'}>
                         <div className={styles.logo_corner}>
                              <img
                                   src={'/logo.jpg'}
                                   className={styles.icons}
                                   width={60}
                                   alt={'logo'}
                              />
                         </div>
                    </Link>
          </div>
     )
};

export default Open_Hours;