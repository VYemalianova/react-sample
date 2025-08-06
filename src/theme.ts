import { createTheme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    light: true;
    dark: true;
    gradient: true;
  }
}

export const MuiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          fontSize: '16px',
          lineHeight: '24px',
          textTransform: 'none',
          borderRadius: '32px',
          '&:hover': {
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
          },
          variants: [
            {
              props: { variant: 'light' },
              style: {
                color: '#630CD2',
                backgroundColor: '#E4D1F5',
                '&:hover': {
                  boxShadow:
                    'rgba(50, 50, 93, 0.12) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.15) 0px 18px 36px -18px inset;',
                },
              },
            },
            {
              props: { variant: 'dark' },
              style: {
                backgroundColor: '#630CD2',
              },
            },
            {
              props: { variant: 'gradient' },
              style: {
                backgroundImage: 'linear-gradient(45deg, #630cd2, #f95f86)',
              },
            },
            {
              props: { variant: 'text' },
              style: {
                color: '#08030e',
                textDecoration: 'underline',
                '&:hover': {
                  color: '#630cd2',
                  boxShadow: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                color: '#08030e',
              },
            },
          ],
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
          paddingBottom: '0px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '16px',
          fontWeight: 700,
        },
      },
    },
  },
});
