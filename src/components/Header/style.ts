import styled from "styled-components";
import comeia from '/public/comeia_pentagono_cinza.svg'
import logo from 'public/logo.svg'

export const Header = styled.header`
    width: 120rem;
    height: 12rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    background-image: url('${comeia.src}');
    background-size: 100%;
    background-repeat: no-repeat;
`

export const BoxLogo = styled.div`
    width: 40rem;
    height: auto;
    display: flex;
    align-items: center;
`

export const TextoLogo = styled.h1`
    margin-left: 2rem;
    font-size: 2.8rem;
`

export const Nav = styled.nav`
    width: 86rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const getStyle = type => {
    if(type === "contato") {
        return`
            color: #ffffff;
            background: #263138;
            width: 13rem;
            height: 4rem;
            padding: 1.2rem 0;
            border-radius: .5rem;
            text-align: center;

        `;
    }
}

export const Span = styled.span`
    color: ${({theme}) => theme.colors.textPrimary};
    font-weight: 600;
    font-size: 1.3rem;
    display: block;
    cursor: pointer;
    ${({type}) => getStyle(type)}

       
`

