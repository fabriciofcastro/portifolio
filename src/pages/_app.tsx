import '../styles/globals.ts'
import type { AppProps } from 'next/app'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globals'
import Layout from '../components/Layout/layout'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return( 
    <>
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