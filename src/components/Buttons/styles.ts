import styled from "styled-components";

export const ButtonActive = styled.button`
    width: 12rem;
    height: 6rem;
    color: ${({theme}) => theme.colors.textSegunds};
    border: none;
    background-color: #263138;
    border-radius: 2rem;
    box-shadow: .3rem .3rem 1rem #263138;
    color: #DFDFDF;
    font-weight: 600;
    font-size: 1.8rem;
`

export const ButtonOff = styled.button`
    width: 12rem;
    height: 6rem;
    color: ${({theme}) => theme.colors.textSegunds};
    border: none;
    background-color: #DFDFDF;
    border-radius: 2rem;
    box-shadow: .3rem .3rem 1rem #263138;
    color: #445964;
    font-weight: 600;
    font-size: 1.8rem;
`