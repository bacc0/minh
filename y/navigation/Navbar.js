import { useEffect, useState } from 'react';
import Contact from '../comps/Contact';
import Logo from '../comps/Logo';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {

     const router = useRouter();

     const buttonLayout = (description, text_hidden, href, src, alt) => {
          return (
               <Link href={href}>
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === href ? styles.disabled : null}
                    >
                         <div>
                              <img
                                   src={src}
                                   className={styles.icons}
                                   alt={alt}
                              />
                         </div>

                         <span className={styles.button_text}>
                              {description} {' '}
                              <span className={styles.button_text_hidden}>
                                   {text_hidden}
                              </span>
                         </span>
                    </button>
               </Link>
          )
     }




     return (
          <div style={{
               // background: 'pink',
               display: 'flex',
          }}
          >

               <div className={styles.container}>
                    {/* <div style={{

                    }}
                    >
                         <img
                              src={'/logo.jpg'}
                              className={styles.icons}
                              width={60}
                              alt={'logo'}
                         />
                    </div> */}
                    {
                         buttonLayout(
                              'home', '',
                              '/',
                              './icons/home.svg',
                              'home icon'
                         )
                    }
                    {
                         buttonLayout(
                              'contact', 'info'
                              , '/contact',
                              './icons/contact.svg',
                              'home icon'
                         )
                    }
                    {
                         buttonLayout(
                              'menu', '',
                              '/menu',
                              './icons/menu.svg',
                              'menu icon'
                         )
                    }
                    {
                         buttonLayout(
                              'takeaway', '',
                              '/takeaway',
                              './icons/takeaway.svg',
                              'takeaway icon'
                         )
                    }
                    {
                         buttonLayout(
                              'open', 'hours',
                              '/open_hours',
                              './icons/open_hours.svg',
                              'open hours icon'
                         )
                    }

                    {/* <Link href="/">
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === '/' ? styles.disabled : null}
                    >
                         <div>
                              <img
                                   src='./icons/home.svg'
                                   className={styles.icons}
                                   alt={'home icon'}
                              />
                         </div>

                         <span className={styles.button_text}>
                              home
                         </span>
                    </button>
               </Link> */}


                    {/* <Link href="/contact">
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === '/contact' ? styles.disabled : null}
                    >
                         <div >
                              <img
                                   src={'./icons/contact.svg'}
                                   alt={'contact icon'}
                                   className={styles.icons}
                              />
                         </div>
                         <span className={styles.button_text}>
                              contact {' '}
                              <span className={styles.button_text_hidden}>
                                   info
                              </span>
                         </span>
                    </button>
               </Link> */}

                    {/* <Link href="/menu">
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === '/menu' ? styles.disabled : null}
                    >
                         <div>
                              <img className={styles.icons}
                                   src={'./icons/menu.svg'}
                                   alt={'menu icon'}
                              />
                         </div>
                         <span className={styles.button_text}>
                              menu
                         </span>
                    </button>
               </Link> */}

                    {/* <Link href="/takeaway">
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === '/takeaway' ? styles.disabled : null}
                    >
                         <div>
                              <img className={styles.icons}
                                   src={'./icons/takeaway.svg'}
                                   alt={'takeaway icon'}
                              />
                         </div>
                         <span className={styles.button_text}>
                              takeaway
                         </span>
                    </button>
               </Link> */}

                    {/* <Link href="/open_hours">
                    <button
                         style={{ color: '#000000' }}
                         className={router.route === '/open_hours' ? styles.disabled : null}
                    >
                         <div>
                              <img className={styles.icons}
                                   src={'./icons/open_hours.svg'}
                                   alt={'open_hours icon'}
                              />
                         </div>
                         <span className={styles.button_text}>
                              open

                         </span>
                         {' '}
                         <span className={styles.button_text_hidden}>
                              hours
                         </span>
                    </button>
               </Link> */}

               </div>
          </div>
     )
};

export default Navbar;


