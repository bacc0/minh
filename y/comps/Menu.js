import { useEffect, useState } from 'react';
import ImgHandleInView from './Img_handle_inview';
import styles from './Menu.module.scss';


const Menu = () => {

     const [topMenu, setTopMenu] = useState(26);
     const [opacity, setOpacity] = useState(0);

     useEffect(() => {
          setInterval(() => {
               setTopMenu(0);
               setOpacity(1)
          }, 100);
     }, []);

     return (
          <div
               className={styles.base}
               style={{
                    opacity: opacity,
                    transition: 'opacity 1.4s'
               }}
          >
               <h4
                    style={{
                         fontSize: '1.1rem',
                         fontWeight: 500,
                         textAlign: 'center',
                         position: 'relative',
                         bottom: topMenu,
                         transition: 'bottom 0.8s',
                    }}
               >
                    Menu
               </h4>

               <div style={{
                    marginBottom: 55
               }}
               ></div>

               <div
                    style={{
                         textAlign: 'center',
                         position: 'relative',
                         top: topMenu,
                         transition: 'top 1.1s'
                    }}
                    className={styles.container}
               >
                    <div className={styles.container_items}>
                         <ImgHandleInView
                              src={'./menu/1.png'}
                              alt={"picture Menu food one"}
                              // width={130}
                              borderRadius={0}
                              style={`${styles.images_menu}`}
                         />

                         {/* <img
                              src={'./1.png'}
                              className={styles.images_menu}
                              alt="picture Menu food one"

                         /> */}
                         <ImgHandleInView
                              src={'./menu//2.png'}
                              alt={"picture Menu food two"}
                              // width={130}
                              borderRadius={0}
                              style={`${styles.images_menu}`}
                         />
                         {/* <img
                              src={'./2.png'}
                              className={styles.images_menu}
                              alt="picture Menu food two"

                         /> */}

                    </div>
                    <div className={styles.container_items}>
                    <ImgHandleInView
                              src={'./menu//3.png'}
                              alt={"picture Menu wines and beers"}
                              // width={130}
                              borderRadius={0}
                              style={`${styles.images_menu}`}
                         />
                         {/* <img
                              src={'./3.png'}
                              className={styles.images_menu}
                              alt="picture Menu wines and beers"
                         /> */}
                           <ImgHandleInView
                              src={'./menu//4.png'}
                              alt={"picture Menu soft drinks"}
                              // width={130}
                              borderRadius={0}
                              style={`${styles.images_menu}`}
                         />
                         {/* <img
                              src={'./4.png'}
                              className={styles.images_menu}
                              alt="picture Menu soft drinks"
                         /> */}
                    </div>

               </div>

               <div className={styles.desserts}>
                    <img
                         src={'./dessertsPic.svg'}
                         className={styles.images_menu}
                         alt="picture Menu desserts"
                    />
               </div>
          </div>
     )
};

export default Menu;