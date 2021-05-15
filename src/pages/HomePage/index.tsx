import React from 'react'
import { ImageDisplay } from '../../components/design/Display'
import {
    GhostButtonInput,
    MainButtonInput
} from '../../components/design/Input'
import { FlexLayout } from '../../components/design/Layout'
import { AnchorNavigation } from '../../components/design/Navigation'
import { SubTitle, Title } from '../../components/design/Typography'
import { theme } from '../../styles/theme'
import { NavBar } from './components/NavBar'

export const HomePage = () => {
    return (
        <>
            <NavBar />
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
                <Title
                    style={{
                        fontSize: '7rem',
                        WebkitTextStroke: `3px ${theme.colors.primary}`,
                        WebkitTextFillColor: 'transparent',
                        textShadow: `0 0 30px rgba(97, 219, 251, 0.55)`,
                        margin: '0'
                    }}
                >
                    INSTALURA
                </Title>
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
        </>
    )
}
