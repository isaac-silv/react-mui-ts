import { createTheme } from '@mui/material';
import { amber, deepPurple } from '@mui/material/colors';
import { ptBR } from '@mui/material/locale';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      dark: deepPurple[800],
      light: deepPurple[300],
      contrastText: '#ffffff',
    },
    secondary: {
      main: amber[600],
      dark: amber[800],
      light: amber[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
      fontSize: '0.75rem'
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 500
    },
    h4: {
      fontSize: '0.950rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700
    },
    h1: {
      fontSize: '2.125rem',
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          '&& .Mui-selected, && .Mui-selected:hover': {
            backgroundColor: deepPurple[500],
            '&, & .MuiListItemIcon-root': {
              color: '#ffffff',
            },
          },
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          marginBottom: '6px',
          '&:hover': {
            backgroundColor: deepPurple[50],
            color: deepPurple[400],
            '& .MuiListItemIcon-root': {
              color: deepPurple[400],
            },
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: deepPurple[50],
          color: deepPurple[500],
          padding: '5px',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: deepPurple[400],
            color: '#ffffff',
          }
        }
      }
    }
  },
},
ptBR,
);
