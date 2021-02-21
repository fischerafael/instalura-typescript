import React from 'react'
import styled from 'styled-components'

const Footer = (props) => {
    return (
        <FooterWrapper {...props}>
            <a href="https://www.devaos.com.br/" target="_blank">
                <img src="/devaos.svg" alt="Logo Devaos" />
            </a>
            <p>
                Criado durante o{' '}
                <a href="https://www.alura.com.br/">
                    <span>Bootcamp Alura JAM Stack</span>
                </a>
            </p>
        </FooterWrapper>
    )
}

export default Footer

export const FooterWrapper = styled.footer`
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding-right: 28px;
    padding-left: 28px;
    img {
        width: 58px;
        margin-right: 23px;
    }
    a {
        color: ${({ theme }) => theme.colors.primary.main.color};
        text-decoration: none;
        transition: 0.3s;
        &:hover,
        &:focus {
            opacity: 0.5;
        }
    }
`
