import { useEffect, useState } from 'react';
import ImgHandleInView from './Img_handle_inview';
import styles from './Menu.module.scss';


const Menu = () => {

     const [topMenu, setTopMenu] = useState(14);
     const [rightMenu, setRightMenu] = useState(30);
     const [opacity, setOpacity] = useState(0);

     const img_1 = (
          <img
               src={'./menu/1.jpg'}
               className={styles.images_menu}
               alt="picture Menu food one"

          />
     )
     const img_2 = (
          <img
               src={'./menu/2.jpg'}
               className={styles.images_menu}
               alt="picture Menu food two"

          />
     )
     const img_3 = (
          <img
               src={'./menu/3.jpg'}
               className={styles.images_menu}
               alt="picture Menu wines and beers"
          />
     )
     const img_4 = (
          <img
               src={'./menu/4.jpg'}
               className={styles.images_menu}
               alt="picture Menu soft drinks"
          />
     )

     useEffect(() => {
          setInterval(() => {
               setTopMenu(0);
               setRightMenu(0);
               setOpacity(1)
          }, 100);
     }, []);

     return (
          <div
               className={styles.base}
               style={{
                    opacity: opacity,
                    transition: 'opacity 1.4s',
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
                         marginBottom: 55
                    }}
               >
                    Menu
               </h4>

               {/* <div>hhh</div> */}

               {/* <embed
    src="menu/menu.pdf"
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="500px"
    width="80vw"
></embed> */}
               <div
                    className={styles.image_container}
                    style={{
                         textAlign: 'center',
                         // position: 'relative',
                         // top: topMenu,
                         // transition: 'top 1.1s',
                        
                          
                    }}
               >
                    <img
                     style={{
                         position: 'relative',
                         right: rightMenu,
                         transition: 'right 1.6s',
                        transitionDelay: '0.25s'
                          
                    }}
                         src={'./menu/menu.png'}
                         className={styles.image_menu}
                         alt="picture Menu soft drinks"
                    />
               </div>

               {/* <div
                    style={{
                         textAlign: 'center',
                         position: 'relative',
                         top: topMenu,
                         transition: 'top 1.1s'
                    }}
                    className={styles.container}
               >
                    <div className={styles.container_items}>
                         {img_1}
                         {img_2}
                    </div>
                    <div className={styles.container_items}>
                         {img_3}
                         {img_4}
                    </div>

               </div>

               <div className={styles.desserts}>
                    <img
                         src={'./menu/dessertsPic.svg'}
                         className={styles.images_menu}
                         alt="picture Menu desserts"
                    />
               </div> */}
          </div>
     )
};

export default Menu;