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
          <S.Titulo>
            Olá!
          </S.Titulo>
          <S.Descricao>
         
              Meu nome é Fabrício Castro, moro em São Paulo/SP.
              Estudo front-end. Cursando na plataforma de ensino Alura, Rocketseat.
         
          </S.Descricao>
          <S.Descricao>
               
               Tenho 36 anos, estou em transição de carreira, vindo da área de varejo de hardware, montagem de computadores, manutenção de microcomputadores e notebooks, onde desenvolvi experiência com gestão de pessoas, gestão de empresas e negociação com cliente, trabalha em equipe.

          </S.Descricao>
          <S.Descricao>
          Hoje construo aplicações Front-end!
          </S.Descricao>
      </S.Text>
      <S.BoxButton>
        <Link href="/portifolio" >
          <S.Button type="button" value="Saiba mais sobre mim"/>
        </Link>
      </S.BoxButton>

    </S.BoxText>
   
     
    <S.BoxImg />
   </S.Container>

   </>
  )
}
