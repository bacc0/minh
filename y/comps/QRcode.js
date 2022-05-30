import styles from './QRcode.module.scss';


const QRcode = () => {
     
     return (
          <div className={styles.container}>

               <img
                    src={'./qr.svg'}
                    className={styles.images_menu}
                    alt="picture QR code"
               />
          </div>
     )
};

export default QRcode;