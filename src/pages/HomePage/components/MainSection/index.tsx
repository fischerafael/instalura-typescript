import React from 'react'
import styled from 'styled-components'
import { MainButtonInput } from '../../../../components/design/Input'
import { FlexLayout } from '../../../../components/design/Layout'
import { SubTitle, Title } from '../../../../components/design/Typography'
import { theme } from '../../../../styles/theme'

export const MainSection = () => {
    return (
        <FlexLayout
            style={{
                minHeight: '85vh',
                width: '100%',
                padding: '0 1rem',
                background: `${theme.gradients.radial}`,
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <ResponsiveTitle>INSTALURA</ResponsiveTitle>
            <SubTitle
                style={{
                    color: `${theme.colors.main}`,
                    textAlign: 'center',
                    maxWidth: '30rem',
                    fontWeight: 'normal',
                    fontSize: '1rem',
                    lineHeight: '1.5rem'
                }}
            >
                A melhor maneira de aprender é ensinar. Consolide os
                conhecimentos aprendidos na Alura compartilhando seu
                aprendizado.
            </SubTitle>
            <MainButtonInput>Começar</MainButtonInput>
        </FlexLayout>
    )
}

const ResponsiveTitle = styled(Title)`
    font-size: 7rem;
    color: ${(props) => props.theme.colors.primary};
    -webkit-text-stroke: 3px;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(97, 219, 251, 0.55);
    line-height: 10rem;
    margin: 0;
    @media (max-width: 900px) {
        -webkit-text-stroke: 2px;
        font-size: 5rem;
    }
    @media (max-width: 600px) {
        -webkit-text-stroke: 1px;
        font-size: 3.5rem;
    }
`
