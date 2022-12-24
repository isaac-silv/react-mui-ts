import { createTheme } from '@mui/material';
import { amber, deepPurple } from '@mui/material/colors';
import { ptBR } from '@mui/material/locale';
import { border } from '@mui/system';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
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
      default: '#20232A',
      paper: '#282C34',
    },
    text: {
      primary: '#fff'
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
          '& .MuiListItemIcon-root': {
            color: '#ffffff'
          },
          '&& .Mui-selected, && .Mui-selected:hover': {
            backgroundColor: deepPurple[400],
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
            backgroundColor: deepPurple[400],
            color: '#ffffff',
            '& .MuiListItemIcon-root': {
              color: '#ffffff',
            },
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: deepPurple[400],
          color: '#ffffff',
          padding: '5px',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: deepPurple[300],
            color: '#ffffff',
          }
        }
      }
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#4C4F55',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(224, 224, 224, 0.12)',
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: '#fff'
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(224, 224, 224, 0.8)',
        }
      }
    },
  },
},
ptBR,
);
