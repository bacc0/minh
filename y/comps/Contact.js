import styles from './Contact.module.scss';


const Contact = () => {


     
     
     return (
          <div className={styles.container}    
          >
               <a href={'https://goo.gl/maps/d8ogGgMkRYUo55v49'}>
                    {/* <div></div> */}
                    <p>533 King’s Road</p>
                    <p>Chelsea, London</p>
                    <p>SW10 0TZ</p>
               </a>

               <a href={`tel: 00442081270808`} >
                    <p className={styles.tel}>T. 0208 127 0808</p>
               </a>
          </div>
     )
};

export default Contact;