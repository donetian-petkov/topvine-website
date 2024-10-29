import { extendTheme } from '@chakra-ui/react';

const theme = {
    fonts: {
        heading: 'Neue Haas Unica W1G, Bold',
        subheading: 'Neue Haas Unica W1G, Light',
        body: 'Neue Haas Unica W1G, Medium',
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
    sizes: {
        xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
            bg: '#9747FF'
        },
    }
}

export default extendTheme(theme);
