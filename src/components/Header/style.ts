import styled from "styled-components";
import comeia from '/public/comeia_pentagono_cinza.svg'
import logo from 'public/logo.svg'
import Link from "next/link";

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
    justify-content: flex-end;
`

export const Linkk = styled(Link)`
    color: ${({theme}) => theme.colors.textPrimary};
    font-weight: 600;
    font-size: 1.5rem;
    display: block;
    padding: 0 7rem;

        &:nth-child(1) {
            font-size: 2rem;
        }

        &:nth-child(2) {
            background-color: #263138;
            color: #fff;
            border: 1px solid;
            padding: 1.5rem 2rem;
            border-radius: 2rem;
        }
`

