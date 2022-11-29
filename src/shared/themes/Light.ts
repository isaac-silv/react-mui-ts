import { createTheme } from '@mui/material';
import { cyan, deepPurple, purple } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      dark: deepPurple[800],
      light: deepPurple[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9155FD',
      dark: cyan[400],
      light: cyan[300],
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
});
