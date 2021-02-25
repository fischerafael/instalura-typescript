import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    children: ReactNode
    colors?: 'primary' | 'secondary' | 'tertiary' | 'tertiaryLigth'
    ghost?: boolean
}

const Button = ({ children, colors }: Props) => {
    return <ButtonStyle color="blue">{children}</ButtonStyle>
}

export default Button

interface StyleProps {
    color: string
}

export const ButtonStyle = styled.button<StyleProps>`
    border: 0;
    cursor: pointer;
    padding: 1rem 2rem;
    opacity: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    ${function ({ color }) {
        return `background: ${color};`
    }}

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
