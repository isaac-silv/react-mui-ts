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
