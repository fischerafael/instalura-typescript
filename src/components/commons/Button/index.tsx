import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Variants = 'secondary' | 'tertiary' | 'tertiaryLight'

interface Props {
    children: ReactNode
    variant?: Variants
    ghost?: boolean
}

const Button = ({ children, variant }: Props) => {
    return <ButtonStyle variant="secondary">{children}</ButtonStyle>
}

export default Button

interface StyleProps {
    variant: Variants
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
    color: ${({ variant, theme }) =>
        variant === 'tertiary' && theme.colors.tertiary.main.color};
    color: ${({ variant, theme }) =>
        variant === 'tertiaryLight' && theme.colors.tertiary.light.color};

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`
