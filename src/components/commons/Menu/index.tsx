import React from 'react'

import Logo from '../Logo'
import { MenuWrapper } from './styles'

import { menuLinks } from '../../../utils/menu-links'
import Button from '../Button'

const Menu = () => {
    return (
        <MenuWrapper>
            <MenuWrapper.Left>
                <Logo />
            </MenuWrapper.Left>
            <MenuWrapper.Center as="ul">
                {menuLinks.map((link) => (
                    <li key={link.url}>
                        <a href={link.url}>{link.name}</a>
                    </li>
                ))}
            </MenuWrapper.Center>
            <MenuWrapper.Left>
                <Button type="ghost">Entrar</Button>
                <Button>Cadastrar</Button>
            </MenuWrapper.Left>
        </MenuWrapper>
    )
}

export default Menu
