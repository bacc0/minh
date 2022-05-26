import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../comps/Menu'
import Logo from '../comps/Logo'
import Contact from '../comps/Contact'



export default function Home() {
     return (
          <div className={styles.container}>
               <Head>
                    <title>MINH 🍝 Pan Asian Restaurant</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <main className={styles.main}>
                    <Logo />
                    <Contact />
                    <Menu />



               </main>

               <footer className={styles.footer} >
                    <div
                    style={{ fontSize: 5, color: '#555555', textAlign: 'center'}}
                    >
                         <p> A DISCRETIONARY SERVICE CHARGE OF 12.5% WILL BE APPLIED TO YOUR BILL </p>
                         
                         <p>
                         Although all due care is taken, dishes may still contain ingredients that are not set out on the menu and these ingredients may cause an allergic reaction.
                         </p>

                         <p>
                      Guests with allergies need to be aware of this risk and should ask a member of the team for information on the allergen content of our food.
                         </p>
                         </div>
               </footer>
          </div>
     )
}
