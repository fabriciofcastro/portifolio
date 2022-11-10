import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/Header';

interface PropsChiuldren {
  children: React.ReactDOM
}

const Layout = ({ children }: PropsChiuldren ) => {
  return (
    <>
    <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout;