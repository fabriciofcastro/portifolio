import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/Header';

interface PropsChildren {
  children: any
}

const Layout = ({ children }: PropsChildren) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}

export default Layout;