import styles from './QRcode.module.scss';
import Link from 'next/link'

const QRcode = () => {

     return (
          <div className={styles.container}>

               <Link href={'/'}>
                    <>
                         <img
                              src={'./qr.svg'}
                              className={styles.images_menu}
                              alt="picture QR code"
                              style={{ 
                                   // filter: 'blur(3px)',
                                   // opacity: 0.2,
                                   fontWeight: 700
                              }}
                         />
                         {/* <div 
                            style={{
                                 color:'#F10000',
                                 position: 'relative',
                                 top: -50,
                                 textAlign: 'center',
                                 textTransform: 'uppercase'
                            }}
                         >
                              <p>Maintenance!</p>
                              <p>sorry for the</p>
                              <p>inconvenience</p>
                         </div> */}
                    </>
               </Link>
          </div>
     )
};

export default QRcode;