import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
    children: ReactNode
    type?: 'secondary.main' | 'tertiary.main' | 'tertiary.light' | 'ghost'
}

const Button = ({ children, type }: Props) => {
    if (type === 'secondary.main')
        return <SecondaryMain>{children}</SecondaryMain>
    if (type === 'tertiary.main') return <TertiaryMain>{children}</TertiaryMain>
    if (type === 'tertiary.light')
        return <TertiaryLigth>{children}</TertiaryLigth>
    if (type === 'ghost') return <DefaultGhost>{children}</DefaultGhost>

    return <DefaultMain>{children}</DefaultMain>
}

export default Button

export const ButtonStyle = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const DefaultMain = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    background-color: ${({ theme }) => theme.colors.primary.main.color};
`
export const DefaultGhost = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.primary.main.color};
    background-color: transparent;
`
export const SecondaryMain = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
`
export const TertiaryMain = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.tertiary.main.contrastText};
    background-color: ${({ theme }) => theme.colors.tertiary.main.color};
`
export const TertiaryLigth = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.tertiary.light.contrastText};
    background-color: ${({ theme }) => theme.colors.tertiary.light.color};
`
