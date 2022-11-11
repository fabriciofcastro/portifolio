import React from 'react';
import { convertToObject } from 'typescript';
import * as S from './style'
import contato from 'public/contato.svg'
import avatar from 'public/avatar.svg'


const contact: React.FC = () => {
  return (
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
              Há! caso queira montar um clube para criar um mundo melhor
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

        </S.BoxForm>

      </S.BoxContent>
    </S.Container>
  )
}

export default contact;