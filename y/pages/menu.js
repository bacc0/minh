
import Menu from '../comps/Menu';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const MenuComp = () => {


     return (
          <div className={`${styles.grid} ${styles.center_item}`}>
               <div>
                    <Menu />
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

export default MenuComp;