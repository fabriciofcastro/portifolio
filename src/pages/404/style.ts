import exp from "constants";
import styled from "styled-components";
import erro404 from '/public/404Page.svg' 

export const Container = styled.div`
    width: 120rem;
    height: 90rem;
    margin: auto;
    background-image: url('${erro404.src}');
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const box = styled.section`
    width: 120rem;
    height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 27rem;
    height: 7rem;
    border-radius: 4rem;
    background-color: #e97325;
    border: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
`