import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = {
    fonts: {
        title: `'Neue Haas Unica W1G', ${base.fonts?.heading}, sans-serif`,
        content: `'Neue Haas Unica W1G', ${base.fonts?.body}, sans-serif`,
        subtitle: `Neue Haas Unica W1G, ${base.fonts?.body}, sans-serif`
    },
    colors: {
        backgroundMain: '#FFFFFF',
        backgroundSecondary: '#91a3b2',
        textPrimary: '#000000',
        textSecondary: '#FFFFFF',
        accentPrimary: '#002345',
        accentSecondary: '#52A6D7'
    },
}

export default extendTheme(theme);
