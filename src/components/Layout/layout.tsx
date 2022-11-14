import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/Header';
import type { AppProps } from 'next/app'

interface PropsChildren {
  children: any
}

const Layout  = ({ children }: PropsChildren ) => {
  return (
    <>
    <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout;