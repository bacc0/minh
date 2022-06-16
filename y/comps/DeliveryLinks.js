import styles from './DeliveryLinks.module.scss';
import Link from 'next/link';

const DeliveryLinks = () => {

     const dataImages = [
          {
               "src": './iconsDelivery/delivaroo.svg',
               "alt": 'delivaroo icon',
               "link": 'https://deliveroo.co.uk/menu/london/chelsea/minh?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share'
          },
          {
               "src": './iconsDelivery/uber.svg',
               "alt": 'uber icon',
               "link": ''
          },
          {
               "src": './iconsDelivery/just-eat.svg',
               "alt": 'just eat icon',
               "link": 'https://www.just-eat.co.uk/restaurants-minh-west-brompton/menu'
          }
          ,
          {
               "src": './iconsDelivery/panda.svg',
               "alt": 'panda icon',
               "link": ''
          },
          {
               "src": './iconsDelivery/fantuan.svg',
               "alt": 'fantuan icon',
               "link": ''
          },

     ]


     return (
          <div className={styles.container}>
               {
                    dataImages.map((el) =>
                         <Link href={el.link}>
                              <img
                                   src={el.src}
                                   className={`${styles.images_menu}`}
                                   alt={el.alt}
                                   style={{
                                        opacity: el.link === '' ? 0.2 : 1,
                                        cursor: el.link === '' ? 'not-allowed' : 'pointer',
                                        filter: el.link === '' ? 'blur(0.5px)' : 'blur(0)',
                                   }}

                              />

                         </Link>
                    )
               }
          </div>
     )
};

export default DeliveryLinks;