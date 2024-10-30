import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = {
    fonts: {
        heading: `'Neue Haas Unica W1G Bold', ${base.fonts?.heading}, sans-serif`,
        body: `'Neue Haas Unica W1G Medium', ${base.fonts?.body}, sans-serif`,
        subheading: `Neue Haas Unica W1G Light, ${base.fonts?.body}, sans-serif`
    },
    colors: {
        brand: {
            primaryBackground: '#FFFFFF',
            secondaryBackground: '#00000029',
            primaryText: '#000000',
            secondaryText: '#FFFFFF',
            primaryAccent: '#002345',
            secondaryAccent: '#52A6D7'
        },
    },
}

export default extendTheme(theme);
