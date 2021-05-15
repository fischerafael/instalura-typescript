import styled from 'styled-components'

const DefaultButton = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: bold;

    padding: 0 2rem;
    transition: 0.5s;

    border: none;
    height: 2.5rem;
    border-radius: 1.25rem;
`

export const MainButtonInput = styled(DefaultButton)`
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.main};
    &:hover {
        background: transparent;
        color: ${(props) => props.theme.colors.main};
    }
`

export const GhostButtonInput = styled(DefaultButton)`
    background: transparent;
    color: ${(props) => props.theme.colors.main};
    &:hover {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.main};
    }
`
