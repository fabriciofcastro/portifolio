import React, { useEffect, useState } from 'react';
import * as S from './styled'
import Head from 'next/head';
import PortifolioItems from './ItemsPortifolio'
import portif from 'public/portifolio.svg'
import { ButtonActive, ButtonOff } from '../../components/Buttons/styles'

const Portifolio = () => {

  const [data, setData] = useState(() => {return PortifolioItems.sort((a, b) => Math.random() - 0.5)})
   
  function allWebSite() {
    setData(() => {return PortifolioItems})
  }

  function webSite() {
     setData(PortifolioItems)
     setData(items =>  items.filter(category => category.category !== "app"))
  }

  function app() {
    setData(PortifolioItems)
    setData(items =>  items.filter(category => category.category !== "website"))
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
        <ButtonActive onClick={allWebSite}>TODOS</ButtonActive>
        <ButtonOff onClick={webSite}>Webs Sites</ButtonOff>
        <ButtonOff onClick={app}>Apps</ButtonOff>
      </S.BoxButtons>
      
      <S.Project>
         
        <S.ProjectChildren>
          {
            data.map((items, i) => (
               <items.style key={i}>
                <S.ImgProject src={items.image} alt=""  /> 
               </items.style>               
            ))
          }
          
        </S.ProjectChildren>
      
      </S.Project>
    </S.Container>
    </>
  )
}

export default Portifolio;