import React from 'react';
import * as S from './styled'
import { ButtonActive, ButtonOff } from '../../components/Buttons/styles'
import portif from 'public/portifolio.svg'
import projectImg1 from 'public/projectArquitetura.webp'
import projectImg2 from 'public/project2.webp'
import projectImg3 from 'public/project3.webp'
import projectImg4 from 'public/project4.webp'
import projectImg5 from 'public/project5.webp'
import projectImg6 from 'public/project6.webp'

import Swiper from 'swiper/react';
import Head from 'next/head';

const portifolio = () => {
  return (
    <>
    <Head>
    <title> Portifólio - Fabrício Castro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex"/>
      <meta name="description" 
            content="Portifílio Fabrício Castro, Desenvolvedor front-end, 
            html, css, javascript, react, next, sqlPostgree, StoryBook ">
      </meta>
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
        <ButtonOff>Webs Sites</ButtonOff>
        <ButtonOff>Apps</ButtonOff>
        <ButtonOff>Todos</ButtonOff>
      </S.BoxButtons>
      
      <S.Project>
         
        <S.ProjectChildren>
          <S.Project1>
            <S.ImgProject src={projectImg1.src} alt="" />
          </S.Project1>
          <S.Project2>
            <S.ImgProject src={projectImg2.src} alt="" />
          </S.Project2>
          <S.Project3>
            <S.ImgProject src={projectImg3.src} alt="" />
          </S.Project3>
          <S.Project4>
             <S.ImgProject src={projectImg4.src} alt="" />
          </S.Project4>
          <S.Project5>
            <S.ImgProject src={projectImg5.src} alt="" />
          </S.Project5>
          <S.Project6>
            <S.ImgProject src={projectImg6.src} alt="" />
          </S.Project6>
        </S.ProjectChildren>
      
      </S.Project>
    </S.Container>
    </>
  )
}

export default portifolio;