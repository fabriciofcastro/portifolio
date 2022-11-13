import React from 'react';
import * as S from './style'
import contato from 'public/contato.svg'
import avatar from 'public/avatar.svg'
import Head from 'next/head';


const contact: React.FC = () => {
  return (
    <>
    <Head>
    <title> Contato - Fabrício Castro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex"/>
      <meta name="description" 
            content="Portifílio Fabrício Castro, Desenvolvedor front-end, 
            html, css, javascript, react, next, sqlPostgree, StoryBook ">
      </meta>
    </Head>
    <S.Container>
      <S.BoxLogoContact>
        <S.ImgContato src={contato.src} alt="" />
      </S.BoxLogoContact>
      <S.BoxText>
        <S.Text>
            Olá, eu sou o Fabrício 🤙 
        </S.Text>
        <S.Text> 
          Desenvolvo <span> ideias </span> e ajudo 
        </S.Text>
        <S.Text>
          a construir um mundo 
        </S.Text>
        <S.Text>
          melhor através do
        </S.Text>
        <S.Text>
        software.
        </S.Text>
      </S.BoxText>
      <S.BoxContent>
        <S.BoxFigure >
          <S.BoxTextoContatoIdeia>
            <S.TextoContatoideia>
              Deixe sua emnsagem. 
            </S.TextoContatoideia>
            <S.TextoContatoideia>
              Há! caso queira montar um comunidade para criar um mundo melhor
            </S.TextoContatoideia>
          </S.BoxTextoContatoIdeia>
          <S.ImgAvatar src={avatar.src} alt="" />
        <S.BoxTextoContatoIdeia>
          Tem alguma idéia?
        </S.BoxTextoContatoIdeia>
        <S.BoxTextoContatoIdeia>
          Vamos construí-la juntos! 
        </S.BoxTextoContatoIdeia>
        </S.BoxFigure>
        <S.BoxForm  >
          <S.Form method='GET' autoComplete='off'>
               <S.Label for="nome">Nome:</S.Label>
               <S.Input id='nome' type="text"/>

               <S.Label for="sobrenome">Sobre Nome:</S.Label>
               <S.Input id='sobrenome' type="text"/>

               <S.Label for="email">E-mail:</S.Label>
               <S.Input id='email' type="text"/>

               <S.Button>Enviar</S.Button>
          </S.Form>
        </S.BoxForm>

      </S.BoxContent>
    </S.Container>
    </>
  )
}

export default contact;