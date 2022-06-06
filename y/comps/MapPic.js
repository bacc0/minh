import styles from './QRcode.module.scss';
import Link from 'next/link';

const MapPic = () => {

     return (
          <div className={styles.container}>

               <Link href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                    <img
                         src={'./mapBL.svg'}
                         className={styles.images_menu}
                         alt="Map Icon Location"
                         style={{ 
                              borderRadius: 11,
                              border: '1px solid #F8F7F7'
                         }}
                    />
               </Link>
          </div>
     )
};

export default MapPic;