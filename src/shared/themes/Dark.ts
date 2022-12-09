import { createTheme } from '@mui/material';
import { amber, cyan, deepPurple } from '@mui/material/colors';

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
    }
  },
});
