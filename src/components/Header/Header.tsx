import Image from 'next/image';
import * as S from './style'
import logo from '/public/logo.svg'


const Header: React.FC = () => {

  
    return (
    
        <S.Header>
           <S.BoxLogo>
            <Image src={logo.src} alt="" width={50} height={50} />
            <S.TextoLogo>
                Fabricio Castro
            </S.TextoLogo>
           </S.BoxLogo>
           <S.Nav>
            <S.Linkk href="/" >
               HOME
            </S.Linkk>
           
            <S.Linkk href="/portifolio">
               PORTIFÓLIO
            </S.Linkk>
          
           </S.Nav>
        </S.Header>
  )
}

export default Header;