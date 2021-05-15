import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors
        gradients: {
            radial: string
        }
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
    primary: string
    main: string
    contrast: string
    lightContrast: string
    background: string
}

interface IBreakPoints {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}
