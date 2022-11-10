import * as S from './style'
import foto from 'public/foto.svg'
import react from 'public/react.svg'
import html from 'public/html.svg'
import css from 'public/css.svg'
import github from 'public/github.svg'
import git from 'public/git.svg'
import javascript from 'public/javascript.svg'
import next from 'public/nextjs.svg'
import rest from 'public/rest-api.svg'
import styledComponents from 'public/styled-components.svg'
import postgres from 'public/postgres.svg'
import sobremim from 'public/sobremim.svg'

import React from 'react';

const About: React.FC = () => {
  return (
    <S.Container>
        <S.BoxImg >
          <S.Sobremim>
          <S.ImgPessoal src={sobremim.src} alt="" />
          </S.Sobremim>
          <S.BoxPessoalImg>
             <S.Foto src={foto.src} alt="" />
          </S.BoxPessoalImg>
        </S.BoxImg>
        <S.BoxApresent>
          <S.Nome>
            Fabrício Castro
          </S.Nome>
          <S.Descricao>
         
              Meu nome é Fabrício Castro 👋 moro em São Paulo/SP.
              Estudo por 5 meses fron-end. Cursando na plataforma de ensino Alura, Rocketseat.
         
          </S.Descricao>
          <S.Descricao>
               
               Tenho 36 anos, estou em transição de carreira, vindo da área de varejo de hardware, montagem de computadores, manutenção de microcomputadores e notenbooks, onde desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente, trabalha em equipe.

          </S.Descricao>
          <S.Descricao>
          Hoje construo aplicações fullstack!
          </S.Descricao>
        </S.BoxApresent>
        <S.HardSkills>
        <S.TitleHard>Hard <span> Skiils</span></S.TitleHard>
            
            <S.Tecnologia>
              <S.ContentImg>
                <S.ImgTecnoliogia src={html.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={css.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={javascript.src} alt="" />
              </S.ContentImg>
              <S.ContentImg>
                <S.ImgTecnoliogia src={react.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={next.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={rest.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={styledComponents.src} alt="" />
              </S.ContentImg>
              <S.ContentImg> 
                <S.ImgTecnoliogia src={postgres.src} alt="" />
              </S.ContentImg>
             
              
             
             
            </S.Tecnologia>
        </S.HardSkills>
    </S.Container>
  )
}

export default About;