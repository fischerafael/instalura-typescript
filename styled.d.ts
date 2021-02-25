import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors
        typographyVariants: ITypography
        breakPoints: IBreakPoints
        borderRadius: string
        transition: string
        fontFamily: string
    }
}

interface ITypography {
    title: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 125%
    }
    titleXS: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 125%
    }
    // [subTitle]
    subTitle: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 125%
    }
    // [paragraph1]
    paragraph1: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 125%
    }
    // [paragraph2]
    paragraph2: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 125%
    }
    // [smallestException]
    smallestException: {
        fontSize: string
        fontWeight: string
        lineHeight: number // 100%
    }
}

interface IColors {
    background: {
        light: {
            color: string
        }
        main: {
            color: string
        }
    }
    primary: {
        main: {
            color: string
            contrastText: string
        }
    }
    secondary: {
        main: {
            color: string
            contrastText: string
        }
    }
    tertiary: {
        main: {
            color: string
            contrastText: string
        }
        light: {
            color: string
            contrastText: string
        }
    }
    modes: {
        dark: object
    }
}

interface IBreakPoints {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}
