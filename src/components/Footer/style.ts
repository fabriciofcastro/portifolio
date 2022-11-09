import styled from "styled-components";
import comeia from 'public/comeia_pentagono.svg'

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
    width: 30rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
`

export const IconsSocial = styled.img`
    width: 10%;
    color: red
`

export const Date = styled.section`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

export const TextFooter = styled.p`
   padding: 1rem;
`