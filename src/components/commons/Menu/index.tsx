import React from 'react'
import Logo from '../Logo'
import { MenuWrapper } from './styles'

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuWrapper.Left>
                <Logo />
            </MenuWrapper.Left>
            <MenuWrapper.Center></MenuWrapper.Center>
        </MenuWrapper>
    )
}

export default Menu
