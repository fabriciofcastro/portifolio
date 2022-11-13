import styled from "styled-components";


export const Container = styled.div `
    width: 120rem;
    height: 100rem;
    margin: auto;
`

export const BoxLogoContact = styled.section`
     width: 100%;
     height: 13rem;
     padding-top: 1.3rem;
`
export const ImgContato = styled.img`
    width: 30%;
`

export const BoxText = styled.section`
    width: 100%;
    height: 25rem;
    color: #fff;
    border-radius: 2rem;
    background-image: linear-gradient(99.03deg, #9ba8af -1%, #263138 92.31%);
    box-shadow: 0px .3rem 9rem rgba(0, 0, 0, 0.1), 0px 1rem 3rem #313634;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 3.5rem;

        span {
            color: ${({theme}) => theme.colors.textSegunds};
            font-weight: 900;
        }
`

export const Text = styled.p`
    text-align: center;
    font-size: 3rem;

`

export const BoxContent = styled.section`
    width: 100%;
    height: 55rem;
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    border: 1px solid red;
`

export const BoxForm = styled.section`
    width: 45%;
    height: 50rem;
    border-radius: 1rem;
    box-shadow: .3rem  .3rem 1rem #000;
`
export const BoxTextoContatoIdeia = styled.section`
    width: 80%;
    height: 10rem;
`

export const TextoContatoideia = styled.p`

`
export const BoxFigure = styled.section`
    width: 45%;
    height: 50rem;
    border-radius: 1rem;
    box-shadow: .3rem  .3rem 1rem #000;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ImgAvatar = styled.img`
    width: 50%;
`


/**
 *  F O R M U L A R I O 
 */

export const Form = styled.form`
    width: 40rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    
`
export const Fildset = styled.fieldset`
    display: block;
`

export const Label = styled.label`
    
`

export const Input = styled.input`
`

export const Button = styled.button`
    
`