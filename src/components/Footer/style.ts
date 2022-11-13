import styled from "styled-components";
import comeia from 'public/comeia_pentagono.svg'
import Link from "next/link";
import Image from "next/image";

export const Container = styled.div`
    width: 120rem;
    height: 10rem;
    margin: auto;
`

export const Logo = styled.img`

`

export const Back = styled.footer`
    background-color: #47555f90 ;
    background-image: url('${comeia.src}');
    background-size: 100%;
    width: 100%;
    height: 8rem;
    border-radius: .3rem ;
    display: flex;
`

export const NetSocial = styled.section`
    width: 30rem;
    height: 100%;
    display: flex; 
    align-items: center;
`

export const Lin = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const IconsSocial = styled(Image)`

`

export const Date = styled.section`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    cursor: pointer;
`

export const TextFooter = styled.p`
   padding: 1rem;
`