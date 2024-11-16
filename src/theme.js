import { extendTheme} from "@chakra-ui/react";

const theme = {
    fonts: {
        body: 'Neue Haas Unica W1G, sans-serif',
        heading: 'Neue Haas Unica W1G, sans-serif',
    },
    colors: {
        backgroundMain: '#FFFFFF',
        backgroundSecondary: '#91a3b2',
        backgroundGray: '#F2F4F6',
        textPrimary: '#000000',
        textSecondary: '#FFFFFF',
        accentPrimary: '#002345',
        accentSecondary: '#52A6D7'
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
    }
}

export default extendTheme(theme);
