import * as S from './style'
import git from '/public/Git.svg'
import linkedin from 'public/Linkedin.svg'
import instagram from 'public/Instagram.svg'

const Footer: React.FC = () => {
  return (
    <S.Container>
        <S.Back >
            <S.NetSocial >
                <S.IconsSocial src={git.src} alt="" />
                <S.IconsSocial src={linkedin.src} alt="" />
                <S.IconsSocial src={instagram.src} alt="" />
            </S.NetSocial>
            <S.Date >
                <S.TextFooter>  &#169; Developer by 
                 Fabricio Castro </S.TextFooter>
                <S.TextFooter>  &#187; </S.TextFooter>
                <S.TextFooter>  2022 &#174; </S.TextFooter>
                <S.TextFooter>  Termos </S.TextFooter>
          
            </S.Date>
        </S.Back>
    </S.Container>

  )
}

export default Footer;