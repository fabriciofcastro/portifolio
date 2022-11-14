import React, { useState } from 'react';
import * as S from './styled'
import { ButtonActive, ButtonOff } from '../../components/Buttons/styles'
import portif from 'public/portifolio.svg'
import projectImg1 from 'public/web.webp'
import projectImg2 from 'public/web2.webp'
import projectImg3 from 'public/web3.webp'
import projectImg4 from 'public/web4.webp'
import projectImg5 from 'public/web5.webp'
import projectImg6 from 'public/web6.webp'
import mobile from 'public/mobile.webp'
import mobile2 from 'public/mobile2.webp'
import mobile3 from 'public/mobile3.webp'
import mobile4 from 'public/mobile4.webp'
import mobile5 from 'public/mobile5.webp'
import mobile6 from 'public/mobile6.webp'

import Head from 'next/head';

const portifolioItems = [
  {
    category: "website",
    image:  projectImg1.src,
    style: S.Project1
  },

  {
    category: "website",
    image: projectImg2.src,
    style: S.Project2
  },

  {
    category: "website",
    image: projectImg3.src,
    style: S.Project3
  },

  {
    category: "website",
    image: projectImg4.src,
    style: S.Project4
  },

  {
    category: "website",
    image: projectImg5.src,
    style: S.Project5
  },
  {
    category: "website",
    image: projectImg6.src,
    style: S.Project6
  },

  {
    category: "app",
    image: mobile.src,
    style: S.Project1
  },

  {
    category: "app",
    image: mobile2.src,
    style: S.Project2
  },

  {
    category: "app",
    image: mobile3.src,
    style: S.Project3
  },

  {
    category: "app",
    image: mobile4.src,
    style: S.Project4
  },

  {
    category: "app",
    image: mobile5.src,
    style: S.Project5
  },

  {
    category: "app",
    image: mobile6.src,
    style: S.Project6
  },
]


const portifolio = () => {

  const [data, setData] = useState(portifolioItems)

  return (
    <>
    <Head>
    <title> Portifólio - Fabrício Castro</title>
     
    </Head>
    <S.Container>
      <S.Header>
        <S.BoxImg>
          <S.ImgPortifolio src={portif.src} alt="" />
        </S.BoxImg>
        <S.BoxTex>
          <S.TextHeader>
          Estes são alguns dos trabalhos e  projetos que já realizei
          </S.TextHeader>
        </S.BoxTex>
      </S.Header>
      <S.BoxButtons>
        <ButtonActive>TODOS</ButtonActive>
        <ButtonOff >Webs Sites</ButtonOff>
        <ButtonOff>Apps</ButtonOff>
      </S.BoxButtons>
      
      <S.Project>
         
        <S.ProjectChildren>
          {
            data.map((items, i) => (
               <items.style key={i}>
                <S.ImgProject src={items.image} alt="" />
               </items.style>               
            ))
          }
          
        </S.ProjectChildren>
      
      </S.Project>
    </S.Container>
    </>
  )
}

export default portifolio;