import styles from './QRcode.module.scss';
import Link from 'next/link'

const QRcode = () => {

     return (
          <div className={styles.container}>

               <Link href={'/'}>
                    <img
                         src={'./qr.svg'}
                         className={styles.images_menu}
                         alt="picture QR code"

                    />
               </Link>
          </div>
     )
};

export default QRcode;