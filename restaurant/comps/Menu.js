import styles from './Menu.module.scss';


const Menu = () => {
     
     return (
          <div className={styles.base}>
               <h4 style={{
                    fontSize: 18,
                    fontWeight: 500,
               }}
               >
                    Menu
               </h4>

               <div className={styles.container}>
                    <div className={styles.container_items}>

                         <img
                              src={'./1.png'}
                              className={styles.images_menu}
                              alt="picture Menu food one"

                         />
                         <img
                              src={'./2.png'}
                              className={styles.images_menu}
                              alt="picture Menu food two"

                         />

                    </div>
                    <div className={styles.container_items}>
                         <img
                              src={'./3.png'}
                              className={styles.images_menu}
                              alt="picture Menu wines and beers"
                         />
                         <img
                              src={'./4.png'}
                              className={styles.images_menu}
                              alt="picture Menu soft drinks"
                         />
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