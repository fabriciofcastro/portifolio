import styled from "styled-components";

export const Container = styled.div`
    width: 120rem;
    height: 85rem;
    margin: auto;
`

export const BoxImg = styled.div`
    width: 100%;
  
    display: flex;
    align-items: center;
`

export const Sobremim =styled.section`
    width: 56rem;
    height: 100%;
`

export const ImgPessoal = styled.img`
    width: 10rem;
`
export const BoxApresent = styled.section`
    width: 75rem;
    height: 28rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
`

export const Nome = styled.h1`
    font-size: 5rem;
    padding-top: 1rem;
`

export const Descricao = styled.p`
    font-size: 1.8rem;
    padding-top: 1rem;
    line-height: 2.5rem;
`

export const HardSkills = styled.section`
    width: 100%;
    height: 62%;
`

export const TitleHard = styled.h1`
    text-align: center;
    height: 12rem;
    font-size: 5rem;
    padding-top: 3rem;

        span {
            color: ${({theme}) => theme.colors.textSegunds}
        }
`

export const Tecnologia = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`
export const ContentImg = styled.section`
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgTecnoliogia =styled.img`
    width: 50%;
`
