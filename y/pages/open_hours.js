

import { useEffect, useState } from 'react';
import QRcode from '../comps/QRcode';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import OpeningTimesTable from '../comps/OpeningTimesTable';


const Open_Hours = () => {

     const [topMenu, setTopMenu] = useState(14);
     const [opacity, setOpacity] = useState(0);

     useEffect(() => {
          setInterval(() => {
               setTopMenu(0);
               setOpacity(1)
          }, 200);
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
                         <div style={{ position: 'relative', top: 0 }}>
                              <div
                                   style={{
                                        position: 'relative',
                                        bottom: topMenu,
                                        transition: 'bottom 0.8s',
                                   }}
                              >
                                   <div
                                        style={{
                                             position: 'relative',
                                             bottom: topMenu,
                                             transition: 'bottom 0.8s',
                                             transitionDelay: '60ms'
                                        }}
                                   >
                                        <strong>Opening Times</strong>
                                   </div>
                                   <hr
                                        className={styles.hr}
                                        style={{
                                             position: 'relative',
                                             bottom: topMenu,
                                             transition: 'bottom 0.8s',
                                             transitionDelay: '15ms'
                                        }}
                                   />
                                   <p>We take last orders at 9:00pm.</p>

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