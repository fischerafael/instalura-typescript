import React, { ReactNode } from 'react'
import styled, { css, CSSProperties } from 'styled-components'

interface Props {
    children: ReactNode
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li' | 'a' | 'span'
    variant: 'smallestException' | 'paragraph1'
    href?: string
}

const Text = ({ variant, children, tag, ...props }: Props) => {
    return (
        <TextBase
            as={tag || 'span'}
            variant={variant || 'paragraph1'}
            {...props}
        >
            {children}
        </TextBase>
    )
}

export default Text

interface StyleProps {
    variant: string
}

const paragraph1 = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.paragraph1.fontSize};
        font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
        line-height: ${theme.typographyVariants.paragraph1.lineHeight};
    `}
`

const smallestException = css`
    ${({ theme }) => css`
        font-size: ${theme.typographyVariants.smallestException.fontSize};
        font-weight: ${theme.typographyVariants.smallestException.fontWeight};
        line-height: ${theme.typographyVariants.smallestException.lineHeight};
    `}
`

export const TextStyleVariants = {
    smallestException,
    paragraph1
}

export const TextBase = styled.span<StyleProps>`
    ${({ variant }) => TextStyleVariants[variant]}
`
