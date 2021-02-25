const colors = {
    background: {
        light: {
            color: '#FFFFFF'
        },
        main: {
            color: '#F2F2F2'
        }
    },
    primary: {
        main: {
            color: '#1DA1F2',
            contrastText: '#fff'
        }
    },
    secondary: {
        main: {
            color: '#FB7B6B',
            contrastText: '#fff'
        }
    },
    tertiary: {
        main: {
            color: '#333333',
            contrastText: '#fff'
        },
        light: {
            color: '#88989E',
            contrastText: '#fff'
        }
    },
    modes: {
        dark: {}
    }
}

export const typographyVariants = {
    // [title]
    title: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: 1.25 // 125%
    },
    titleXS: {
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: 1.25 // 125%
    },
    // [subTitle]
    subTitle: {
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: 1.25 // 125%
    },
    // [paragraph1]
    paragraph1: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: 1.25 // 125%
    },
    // [paragraph2]
    paragraph2: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: 1.25 // 125%
    },
    // [smallestException]
    smallestException: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: 1 // 100%
    }
}

export const breakPoints = {
    xs: 0,
    sm: 488,
    md: 768,
    lg: 992,
    xl: 1200
}

export const theme = {
    colors,
    typographyVariants,
    breakPoints,
    borderRadius: '8px',
    transition: '200ms ease-in-out',
    fontFamily: "'Rubik', sans-serif"
}
