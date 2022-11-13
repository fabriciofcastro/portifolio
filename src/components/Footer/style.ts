import styled from "styled-components";
import comeia from 'public/comeia_pentagono.svg'
import Link from "next/link";
import Image from "next/image";

export const Container = styled.div`
    width: 120rem;
    height: 10rem;
    margin: auto;
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
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
`

export const Lin = styled(Link)`
   padding: 1rem 5rem;
`

export const IconsSocial = styled(Image)`

`



