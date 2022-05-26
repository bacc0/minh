
import styles from './Logo.module.scss';


const Logo = () => {


     return (
          <>
               <img
                    src={'./logo.svg'}
                    min_width_600px={222}
                    className={styles.logo}
               />
          </>
     )
};

export default Logo;