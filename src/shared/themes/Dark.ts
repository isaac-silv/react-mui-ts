import { createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    }
  }
});
