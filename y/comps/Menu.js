
import styles from './Menu.module.scss';


const Menu = () => {


     return (
          <>
          <h2 >Menu</h2>

          <div className={styles.container}>
               <div className={styles.container_items}>

                    <img
                         src={'./1.png'}
                         min_width_600px={222}
                         className={styles.images_menu}
                    />
                    <img
                         src={'./2.png'}
                         min_width_600px={222}
                         className={styles.images_menu}
                    />
               </div>
               <div className={styles.container_items}>
                    <img
                         src={'./3.png'}
                         min_width_600px={222}
                         className={styles.images_menu}
                    />
                    <img  
                         src={'./4.png'}
                         min_width_600px={222}
                         className={styles.images_menu}
                    />
               </div>
          </div>
          </>
     )
};

export default Menu;