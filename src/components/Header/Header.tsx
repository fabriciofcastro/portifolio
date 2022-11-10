import Image from 'next/image';
import Link from 'next/link';
import * as S from './style'
import logo from '/public/logo.svg'


const Header: React.FC = () => {

    <style>
        
    </style>

    return (
    <>
        <S.Header>
           <S.BoxLogo>
            <Image src={logo.src} alt="" width={50} height={50} />
            <S.TextoLogo>
                Fabricio Castro
            </S.TextoLogo>
           </S.BoxLogo>
           <S.Nav>
            <Link href="/" >
               <S.Span>HOME</S.Span>
            </Link>
            <Link href="/about" >
            <S.Span>SOBRE</S.Span>
            </Link>
            <Link href="/portifolio">
                <S.Span>PORTIFÓLIO</S.Span>
            </Link>
            <Link href="/" >
                <S.Span>SERVIÇOS</S.Span>
            </Link>
            <Link href="/" >
                <S.Span>RESUMO</S.Span>
            </Link>
            <Link href="/" >
                <S.Span type="contato" >CONTATO</S.Span>
            </Link>
           </S.Nav>
        </S.Header>
    </>
  )
}

export default Header;