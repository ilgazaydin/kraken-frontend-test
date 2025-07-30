import { createTheme } from '@mui/material/styles';

export const colors = {
  hemocyanin: '#180048',
  ice: '#f0ffff',
  plum: '#600e6b',
  purpleHaze: '#a49fc8',
  siphon: '#100030',
  sohoLights: '#f050f8',
  sohoLightsLight: '#ff85ff',
  deepSea: '#5840ff',
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.hemocyanin,
      light: colors.purpleHaze,
      dark: colors.siphon,
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.sohoLights,
      light: colors.sohoLightsLight,
      dark: colors.plum,
      contrastText: colors.hemocyanin,
    },
    background: {
      default: colors.siphon,
      paper: colors.hemocyanin,
    },
    text: {
      primary: '#ffffff',
      secondary: colors.ice,
      disabled: colors.purpleHaze,
    },
  },

  typography: {
    fontFamily:
      "Chromatophore, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      '@media (max-width:899px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:899px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      '@media (max-width:899px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: '2.5rem',
      '@media (max-width:899px)': {
        fontSize: '2rem',
      },
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      '@media (max-width:899px)': {
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.25rem',
      '@media (max-width:899px)': {
        fontSize: '1.125rem',
      },
    },
  },

  spacing: 4,

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        button: {
          fontFamily: 'inherit',
        },
        img: {
          maxWidth: '100%',
          height: 'auto',
        },
        p: {
          margin: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&:hover': {
            backgroundColor: colors.purpleHaze,
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: colors.sohoLightsLight,
          },
        },
      },
    },
  },
});

export default muiTheme;
