const colors = {
    primary: '#61DAFB',
    main: '#FFFFFF',
    contrast: '#222',
    lightContrast: '#363F42',
    background: '#222'
}

const gradients = {
    radial: `radial-gradient(50% 50% at 50% 50%, ${colors.lightContrast} 0%, ${colors.contrast} 100%)`
}

export const theme = {
    colors,
    gradients
}
