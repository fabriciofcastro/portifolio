import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

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