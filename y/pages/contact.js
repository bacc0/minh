import { useEffect, useState } from 'react';
import MapPic from '../comps/MapPic';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Contact = () => {


     const [topMenu, setTopMenu] = useState(14);
     const [opacity, setOpacity] = useState(0);

     useEffect(() => {
          setInterval(() => {
               setTopMenu(0);
               setOpacity(1)
          }, 100);
     }, []);

     const titleStyle = { fontSize: '0.65rem' }


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
                              > <strong>Contact Info</strong>  </div>
                              <hr
                                   style={{
                                        position: 'relative',
                                        bottom: topMenu,
                                        transition: 'bottom 0.8s',
                                        transitionDelay: '15ms'
                                   }}
                                   className={styles.hr}
                              />
                              <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>

                                   <div style={{ cursor: 'pointer' }}>

                                        <p>
                                             <div style={titleStyle}>
                                                  address
                                             </div>
                                             533 King’s Road, Chelsea, London, SW10 0TZ
                                        </p>
                                   </div>
                              </a>
                              <Link href={'tel: 00442081270808'}>
                                   <div style={{ cursor: 'pointer' }}>

                                        <p>
                                             <div style={titleStyle}>
                                                  phone
                                             </div>
                                             0208 127 0808
                                        </p>

                                   </div>
                              </Link>

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
                         className={styles.separatorBottomPics}
                    >
                         <MapPic />
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

export default Contact;