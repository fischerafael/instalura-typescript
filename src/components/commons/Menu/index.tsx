import React from 'react'

import Logo from '../Logo'
import { MenuWrapper } from './styles'

import { menuLinks } from '../../../utils/menu-links'
import ButtonOld from '../ButtonOld'

import Text from '../../foundation/Text'
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
                        <Text tag="a" variant="paragraph1" href={link.url}>
                            {link.name}
                        </Text>
                    </li>
                ))}
            </MenuWrapper.Center>
            <MenuWrapper.Left>
                <Button colors="secondary">Oi</Button>
            </MenuWrapper.Left>
        </MenuWrapper>
    )
}

export default Menu
