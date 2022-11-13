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
import { it } from 'node:test';

const portifolio = () => {

  const dataImg = [
        mobile, projectImg1, 
        mobile6, projectImg3,  
        mobile5, mobile4, 
        projectImg2, mobile2,
        projectImg4, mobile3,
        projectImg5, projectImg6
 ]

 const dataObject = [
    {
      web: projectImg1,
      app: mobile
    },

    {
      web: projectImg2,
      app: mobile2
    },

    {
      web: projectImg3,
      app: mobile3
    },

    {
      web: projectImg4,
      app: mobile4
    },

    {
      web: projectImg5,
      app: mobile5
    },

    {
      web: projectImg6,
      app: mobile6
    },
 ]

 const [data, setData] = useState(dataObject)

 function PageWeb() {
  const web = dataObject.filter(item => {
    item.web
  })
    setData(web)
}

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
        <ButtonOff onChange={PageWeb}>Webs Sites</ButtonOff>
        <ButtonOff>Apps</ButtonOff>
      </S.BoxButtons>
      
      <S.Project>
         
        <S.ProjectChildren>
          
           {
             data.map((item, i) => {
              
              if (i === 0) {
                return (
                  <S.Project1>
                     <S.ImgProject src={item.web.src} alt="" />
         	        </S.Project1>
                )
              }
              else if (i === 1) {
                return (
                  <S.Project2>
                     <S.ImgProject src={item.app.src} alt="" />
         	        </S.Project2>
                )
              }
              else if (i === 2) {
                return (
                  <S.Project3>
                     <S.ImgProject src={item.web.src} alt="" />
         	        </S.Project3>
                )
              }

              else if (i === 3) {
                return (
                  <S.Project4>
                     <S.ImgProject src={item.app.src} alt="" />
         	        </S.Project4>
                )
              }

              else if (i === 4) {
                return (
                  <S.Project5>
                     <S.ImgProject src={item.web.src} alt="" />
         	        </S.Project5>
                )
              }

              else if (i === 5) {
                return (
                  <S.Project6>
                     <S.ImgProject src={item.app.src} alt="" />
         	        </S.Project6>
                )
              }
             
             })
           }
          
        </S.ProjectChildren>
      
      </S.Project>
    </S.Container>
    </>
  )
}

export default portifolio;