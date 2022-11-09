import * as S from './style'

export default function Home() {
  return (
   <S.Container>
    <S.BoxText>
      <S.Text>
          <S.P type="ola"> Olá!              </S.P> 
          <S.P type="sou"> Eu sou um         </S.P> 
          <S.P type="developer"> programador </S.P> 
          <S.P type="recepcao">Seja bem-vindo ao meu portifólio website</S.P>
      </S.Text>
      <S.BoxButton>
        <S.Button type="button" value="Saiba mais sobre mim"/>
      </S.BoxButton>

    </S.BoxText>
   
     
    <S.BoxImg />
   </S.Container>
  )
}
