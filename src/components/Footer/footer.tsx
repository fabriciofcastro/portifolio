import * as S from './style'
import git from '/public/Git.svg'
import linkedin from 'public/Linkedin.svg'
import instagram from 'public/Instagram.svg'
import logo from 'public/logo.svg'

const Footer: React.FC = () => {
  return (
    <S.Container>
        <S.Back >
            <S.NetSocial >
              <S.Lin href="https://github.com/fabriciofcastro" target="_blank" >
                <S.IconsSocial src={git.src} alt="" width={40} height={40} />
              </S.Lin>
              <S.Lin href="https://www.linkedin.com/in/fabriciofcastro/" target="_blank">
                <S.IconsSocial src={linkedin.src} alt="" width={40} height={40}/>
              </S.Lin>
              <S.Lin href="https://www.instagram.com/" target="_blank">
                 <S.IconsSocial src={instagram.src} alt="" width={40} height={40}/>
              </S.Lin>
            </S.NetSocial>

            <S.Date >
              <S.Logo src={logo.src} alt="" />
                <S.TextFooter> Developer by 
                 Fabricio Castro </S.TextFooter>
                <S.TextFooter>  &#187; </S.TextFooter>
                <S.TextFooter>  2022 &#174; </S.TextFooter>
                <S.TextFooter>  Termos </S.TextFooter>
                <S.TextFooter>  Privacidade </S.TextFooter>
          
            </S.Date>
          
        </S.Back>
    </S.Container>

  )
}

export default Footer;