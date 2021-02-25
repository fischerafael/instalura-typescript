import React, { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonVariants =
    | 'secondary'
    | 'tertiary'
    | 'tertiaryLight'
    | 'primaryGhost'
    | 'secondaryGhost'
    | 'tertiaryGhost'
    | 'tertiaryLightGhost'

interface ComponentProps {
    children: ReactNode
    variant?: ButtonVariants
    ghost?: boolean
}

const Button = ({ children, variant }: ComponentProps) => {
    return <ButtonStyle variant={variant}>{children}</ButtonStyle>
}

export default Button

interface StyleProps {
    variant?: ButtonVariants
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

    color: ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ variant, theme }) =>
        variant === 'secondary' && theme.colors.secondary.main.color};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
