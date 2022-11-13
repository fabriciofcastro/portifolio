import Head from 'next/head'
import Link from 'next/link'
import * as S from './style'

export default function Home() {
  return (
    <>
    <Head>
      <title> Home - Fabrício Castro</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex"/>
      <meta name="description" 
            content="Portifílio Fabrício Castro, Desenvolvedor front-end, 
            html, css, javascript, react, next, sqlPostgree, StoryBook ">
      </meta>
    </Head>
   <S.Container>
    <S.BoxText>
      <S.Text>
          <S.P type="ola"> Olá! 🤙           </S.P> 
          <S.P type="sou"> Eu sou um         </S.P> 
          <S.P type="developer"> programador </S.P> 
          <S.P type="recepcao">Seja bem-vindo ao meu portifólio website</S.P>
      </S.Text>
      <S.BoxButton>
        <Link href="/about" >
          <S.Button type="button" value="Saiba mais sobre mim"/>
        </Link>
      </S.BoxButton>

    </S.BoxText>
   
     
    <S.BoxImg />
   </S.Container>

   </>
  )
}
