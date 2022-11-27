import { PaletteOptions } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

export const lightPalette: PaletteOptions = {
    primary: {
        main: '#5f0000',
        dark: grey[800]
    },
    secondary: {
        main: grey[800],
    },
    background: {
        paper: grey[200],
        default: grey[100]
    },
    action: {
        active: '#5f0000',
    }
}

export const darkPalette: PaletteOptions = {
    primary: {
        main: grey[100],
        dark: grey[200]
    },
    secondary: {
        main: grey[200]
    },
    background: {
        paper: grey[900],
        default: grey[800]
    },
    action: {
        active: '#5f0000',
    }
}

export const darkComponents = {
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: grey[900],
                }
            }
        }
    }
}