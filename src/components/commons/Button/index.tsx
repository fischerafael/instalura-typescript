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
    ghost?: boolean
}

const Button = ({ children, variant, ghost }: ComponentProps) => {
    return (
        <ButtonStyle variant={variant} ghost={ghost}>
            {children}
        </ButtonStyle>
    )
}

export default Button

export const ButtonStyle = styled.button<StyleProps>`
    border: 0;
    cursor: pointer;
    padding: 1rem 2rem;
    opacity: 1;

    transition: 0.5s;

    border-radius: ${({ theme }) => theme.borderRadius};

    color: ${({ ghost, theme }) =>
        ghost
            ? theme.colors.primary.main.color
            : theme.colors.primary.main.contrastText};
    color: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'secondary' && theme.colors.secondary.main.color
            : variant === 'secondary' &&
              theme.colors.secondary.main.contrastText};
    color: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'tertiary' && theme.colors.tertiary.main.color
            : variant === 'tertiary' &&
              theme.colors.tertiary.main.contrastText};
    color: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'tertiaryLight' && theme.colors.tertiary.light.color
            : variant === 'tertiaryLight' &&
              theme.colors.tertiary.light.contrastText};

    background: ${({ ghost, theme }) =>
        ghost
            ? theme.colors.primary.main.contrastText
            : theme.colors.primary.main.color};
    background: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'secondary' &&
              theme.colors.secondary.main.contrastText
            : variant === 'secondary' && theme.colors.secondary.main.color};
    background: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'tertiary' && theme.colors.tertiary.main.contrastText
            : variant === 'tertiary' && theme.colors.tertiary.main.color};
    background: ${({ ghost, variant, theme }) =>
        ghost
            ? variant === 'tertiaryLight' &&
              theme.colors.tertiary.light.contrastText
            : variant === 'tertiaryLight' && theme.colors.tertiary.light.color};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
