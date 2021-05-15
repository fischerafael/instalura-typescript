import React from 'react'
import styled from 'styled-components'
import { ImageDisplay } from '../../../../components/design/Display'
import {
    GhostButtonInput,
    MainButtonInput
} from '../../../../components/design/Input'
import { FlexLayout } from '../../../../components/design/Layout'
import { AnchorNavigation } from '../../../../components/design/Navigation'
import { theme } from '../../../../styles/theme'

export const NavBar = () => {
    return (
        <FlexLayout
            as="header"
            style={{
                height: '15vh',
                width: '100%',
                padding: '0 1rem',
                background: `${theme.colors.background}`
            }}
        >
            <FlexLayout
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '60rem',
                    gap: '1rem',
                    justifyContent: 'space-between'
                }}
            >
                <ImageDisplay
                    style={{ maxWidth: '7rem' }}
                    src="/instalura-logo.svg"
                    alt="Instalura Logo"
                />
                <FlexLayout
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-end',
                        gap: '1rem'
                    }}
                >
                    <GhostButtonInput>Entrar</GhostButtonInput>
                    <MainButtonInput>Cadastrar</MainButtonInput>
                </FlexLayout>
            </FlexLayout>
        </FlexLayout>
    )
}
