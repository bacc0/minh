
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
     render() {
          return (
               <Html>
                    <Head>
                         <link
                              href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=East+Sea+Dokdo&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                              rel="stylesheet"
                         />

                         <link
                              rel='preload'
                              as='image'
                              href='other.svg'
                              type='image/svg'
                              crossOrigin='anonymous'
                         />

                         <link 
                              rel='preload' 
                              as='image' 
                              href='other.jpg' 
                              type='image/jpg' 
                              crossOrigin='anonymous' 
                         />



                    </Head>
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </Html>
          )
     }
}

export default MyDocument