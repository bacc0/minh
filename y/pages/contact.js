import { useEffect, useState } from 'react';
import MapPic from '../comps/MapPic';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Contact = () => {


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
                         <div
                              style={{
                                   position: 'relative',
                                   bottom: topMenu,
                                   transition: 'bottom 0.8s',
                              }}
                         >
                              <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                                   <div style={{ cursor: 'pointer' }}>
                                        <div>
                                             <strong>Address</strong>
                                        </div>
                                        <div>533 King’s Road, Chelsea, London, SW10 0TZ</div>
                                   </div>
                              </a>
                              <Link href={'tel: 00442081270808'}>
                                   <div style={{ cursor: 'pointer' }}>
                                        <div><strong>Phone</strong></div>
                                        <div>0208 127 0808</div>
                                   </div>
                              </Link>

                         </div>
                    </div>
                    <div style={{
                         display: 'flex',
                         justifyContent: 'center',
                         position: 'relative',
                         top: topMenu,
                         transition: 'top 0.8s',
                    }}


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