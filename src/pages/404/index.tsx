import Image from 'next/image';
import React from 'react';
import erro404 from '/public/404Page.svg' 

const NotFound404: React.FC = () => {
  return <>
    <Image src={erro404.src} width={600} height={700} alt="Imagem de erro" />
  </>
}

export default NotFound404;