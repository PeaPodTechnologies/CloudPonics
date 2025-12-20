'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    background: {
      default: '#FBFBF2',
      paper: '#F1F1E4',
    },
    text: {
      primary: '#434051',
      secondary: '#434051',
    },
    primary: {
      main: '#197D2A',
      light: '#3DB351',
      contrastText: '#FBFBF2',
    },
    secondary: {
      main: '#C85E41',
      light: '#E47862',
      contrastText: '#FBFBF2',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;