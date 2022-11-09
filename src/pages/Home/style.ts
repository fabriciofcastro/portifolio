import styled from "styled-components";
import imgDesenvolvedor from 'public/desenvolvedor.svg'

export const Container = styled.div`
    width: 120rem;
    height: 70rem;
    margin: auto;
    display: flex;
`

export const BoxText = styled.section`
    width: 60rem;
    height: 100%;

`

export const Text = styled.section`
    width: 100%;
    height: 35rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const getStyle = type => {
    if(type === "ola") {
        return`
            font-size: 2.4rem;
    `;
    }

    if (type === "sou") {
        return`
             font-size: 7.2rem;
             margin-top: 1rem;
             text-transform: uppercase;
        `;
    }

    if(type === "developer") {
        return`
            font-size: 7.2rem;
            text-transform: uppercase;
        `;
    }

    if(type === "recepcao") {
        return`
        font-size: 2.4rem;
        margin-top: 1rem
        `
    }
}

export const P = styled.p`
    ${({type}) => getStyle(type)}

`

export const Apresentacao = styled.p`
   
   
`
export const BoxButton = styled.div`
    height: 19rem;
    width: 100%;
    display: flex;
    align-items: center;
`

export const Button = styled.input`
    width: 31rem;
    height: 6.5rem;
    border-radius: 2rem;
    background: #263138;
    color: #fff;
    font-size: 2rem;
    border: 1px solid #48555e;
    box-shadow: .3rem .5rem 1rem #263138;
`




export const BoxImg = styled.section`
    width: 60rem;
    height: 100%;
    background-image: url('${imgDesenvolvedor.src}');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
`
