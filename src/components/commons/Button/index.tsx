import React, { ReactNode } from 'react'
import styled from 'styled-components'

type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'tertiaryLight'

interface ComponentProps {
    children: ReactNode
    variant: ButtonVariants
    ghost?: boolean
}

interface StyleProps {
    variant?: ButtonVariants
}

const Button = ({ children, variant, ghost }: ComponentProps) => {
    if (ghost)
        return <GhostButtonStyle variant={variant}>{children}</GhostButtonStyle>

    return <DefaultButtonStyle variant={variant}>{children}</DefaultButtonStyle>
}

export default Button

export const ButtonStyle = styled.button<StyleProps>`
    border: 0;
    cursor: pointer;
    padding: 1rem 2rem;
    opacity: 1;

    transition: 0.5s;

    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
export const DefaultButtonStyle = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    color: ${({ variant, theme }) =>
        variant === 'secondary' && theme.colors.secondary.main.contrastText};
    color: ${({ variant, theme }) =>
        variant === 'tertiary' && theme.colors.tertiary.main.contrastText};
    color: ${({ variant, theme }) =>
        variant === 'tertiaryLight' &&
        theme.colors.tertiary.light.contrastText};

    background: ${({ theme }) => theme.colors.primary.main.color};
    background: ${({ variant, theme }) =>
        variant === 'secondary' && theme.colors.secondary.main.color};
    background: ${({ variant, theme }) =>
        variant === 'tertiary' && theme.colors.tertiary.main.color};
    background: ${({ variant, theme }) =>
        variant === 'tertiaryLight' && theme.colors.tertiary.light.color};
`
export const GhostButtonStyle = styled(ButtonStyle)`
    color: ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ variant, theme }) =>
        variant === 'secondary' && theme.colors.secondary.main.color};
    color: ${({ variant, theme }) =>
        variant === 'tertiary' && theme.colors.tertiary.main.color};
    color: ${({ variant, theme }) =>
        variant === 'tertiaryLight' && theme.colors.tertiary.light.color};

    background: transparent;
`
