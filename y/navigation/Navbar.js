import { useEffect, useState } from 'react';
import Contact from '../comps/Contact';
import Logo from '../comps/Logo';

import styles from '../styles/Home.module.css'

const Navbar = () => {
     const [topContact, setTopContact] = useState(-8);

     useEffect(() => {
          setInterval(() => {
               setTopContact(0);

          }, 100);
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

     return (
          <div
               style={{
                    //      display: 'flex',
                    //      'align-items': 'center',
                    //      'justify-content': 'center',
                    //      'flex-wrap': 'wrap',
                    //      'max-width': 1800,

                    // borderBottom: '1px solid grey',
                    // height:20
               }}
          >
               {/* <h4>hello</h4> */}
               {/* <Logo /> */}
               {/* {tempContact} */}
          </div>
     )
};

export default Navbar;


