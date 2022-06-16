import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../comps/Menu'
import Logo from '../comps/Logo'
import Contact from '../comps/Contact'
import PicsComp from '../comps/PicsComp'
import QRcode from '../comps/QRcode'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ImgHandleInView from '../comps/Img_handle_inview'
import DeliveryLinks from '../comps/DeliveryLinks'



export default function Home() {
     const [opacityAll, setOpacityAll] = useState(0);
     const [topContact, setTopContact] = useState(-8);
     const [topPics, setTopPics] = useState(14);


     useEffect(() => {
          setInterval(() => {
               setOpacityAll(1);
          }, 5);

          setInterval(() => {
               setTopContact(0);
               setTopPics(0);
          }, 200);
     }, []);

     const tempContact = (
          <div
               style={{
                    position: 'relative',
                    top: topContact,
                    transition: 'top 0.6s',
               }}
          >
               <Contact />
          </div>
     );

     const tempPics = (
          <div
               style={{
                    textAlign: 'center',
                    position: 'relative',
                    top: topPics,
                    transition: 'top .6s',
                    transitionDelay: '80ms'
               }}
          >
               <PicsComp />
          </div>
     );

     const secondText = (
          <h2
               style={{
                    position: 'relative',
                    opacity: opacityAll,
                    bottom: topContact,
                    transition: 'bottom .6s, opacity .6s',
               }}
          >
               pan-Asian FOoD, Pub and Restaurant
          </h2>
     );

     const mapImg = (
          <>
               <div style={{ marginTop: 70, color: 'red' }} />
               <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                    <h4 style={{ color: '#000000', fontSize: '0.8rem' }}>Restaurant Location</h4>
                    <img
                         src={'./mapBL.svg'}
                         alt={'map location'}
                         width={230}
                         style={{ borderRadius: 11, border: '0.3px solid #E0E0E0' }}
                    />
               </a>
               <div style={{ marginBottom: 5 }} />
          </>
     );

     return (
          <div className={styles.container}>
               <Head>
                    <title>MINH 🍝 Pan Asian Restaurant</title>
                    <meta name="minh" content="Gpan-Asian FOoD, Pub and Restaurant" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main className={styles.main}
                    style={{ opacity: opacityAll, transition: 'opacity 1s' }}
               >
                    <Logo />
                    
                  

                    {secondText}
                    {tempContact}
                    {tempPics}

                    <DeliveryLinks/>
                    {mapImg}
               </main>
          </div>
     )
}
