import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    ${(props) => resetCSS}
`
const resetCSS = css`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        @media (max-width: 900px) {
            font-size: 95%;
        }
        @media (max-width: 600px) {
            font-size: 90%;
        }
    }
`
