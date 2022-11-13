import * as S from './style'
import git from '/public/github.svg'
import linkedin from 'public/Linkedin.svg'


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
             
            </S.NetSocial>


        </S.Back>
    </S.Container>

  )
}

export default Footer;