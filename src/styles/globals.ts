import { createGlobalStyle } from "styled-components"

const GlobaStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({theme}) => theme.colors.background};
    color: ${props => props.theme.colors.textPrimary};
    font: 400 16px Roboto, sans-serif;
    width: 1366px;
    height: 768px;
    margin: auto;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
export default GlobaStyle