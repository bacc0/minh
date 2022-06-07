import '../styles/globals.css'
import Layout from '../navigation/Layout'
import { AnimatePresence } from "framer-motion"


function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
