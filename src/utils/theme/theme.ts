import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#03dac5',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: '#212121',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Montserrat', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    h4: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: '#282828',
      },
    },
    MuiPaper: {
      elevation1: {
        backgroundColor: '#382e47',
        color: '#BB86FC',
      },
      outlined: {
        borderColor: '#BB86FC',
        backgroundColor: 'transparent',
      },
    },
    MuiFormLabel: {
      root: {
        color: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
});
