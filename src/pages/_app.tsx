import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globals'
import Layout from '../components/Layout/layout'
import Head from 'next/head'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return( 
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
      
      </Head>
      <ThemeProvider theme={ theme }>
         <Layout>
           <Component {...pageProps } />
         </Layout>
         <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp