import { useEffect, useState } from 'react';
import QRcode from '../comps/QRcode';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


const Takeaway = () => {

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
                                   <strong>How to use QR code </strong>
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
                              <p>Open the camera app. </p>
                              <p>Focus the camera on the QR code by gently tapping the code.</p>
                              <p>Follow the instructions on the screen to complete the action.</p>
                              <p>Or simply click the QR code!</p>

                         </div>
                    </div>
                    <div
                         className={styles.separatorBottomPics}
                         style={{
                              display: 'flex',
                              justifyContent: 'center',
                              position: 'relative',
                              top: topMenu,
                              transition: 'top 0.8s',
                         }}

                    >
                         <QRcode />
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

export default Takeaway;