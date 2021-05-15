import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html, body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamily};

        display: flex;
        min-height: 100vh;
        width: 100%;
    }    
`
