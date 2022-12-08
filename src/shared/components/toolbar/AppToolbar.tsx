import * as React from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  MenuItem,
  Icon,
  Paper,
  InputBase,
  useMediaQuery,
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import { useAppThemeContext, useAuthContext, useDrawerContext } from '../../contexts';
import { useTheme } from '@mui/material';


interface IToolBarProps {
  textSearch?: string;
  lookInputSeach?: boolean;
  changeTextSearch?: (newText: string) => void;
}


export const AppToolbar: React.FC<IToolBarProps> = ({
  textSearch, lookInputSeach = false, changeTextSearch,
}) => {

  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { logout } = useAuthContext();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Toolbar disableGutters sx={{paddingX: theme.spacing(3)}}>

        <Box sx={{ mr: 1 }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, ml: theme.spacing(1) }}>
          <Paper
            elevation={0}
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: smDown ? 200 : 300,
              height: 40,
              paddingX: 0
            }}
          >
            <InputBase
              value={textSearch}
              onChange={(e) => changeTextSearch?.(e.target.value)}
              sx={{
                ml: 1,
                flex: 1
              }}
              placeholder='Buscar...'
            />
            <IconButton
              type='button'
              sx={{
                display: 'flex',
                justifyContent: 'end',
                p: '10px',
                borderTopLeftRadius: '0',
                borderBottomLeftRadius: '0'
              }}
            >
              <Icon>person_search</Icon>
            </IconButton>
          </Paper>
        </Box>

        <Box sx={{ mr: theme.spacing(1) }}>
          <IconButton onClick={toggleTheme}>
            <Icon>
              {themeName === 'light' ? 'dark_mode' : 'light_mode'}
            </Icon>
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              p: 0,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: 'transparent'
              }
            }}>
            <Avatar sx={{
              height: theme.spacing(5),
              width: theme.spacing(5)}} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Perfil</Typography>
            </MenuItem>

            <MenuItem onClick={logout}>
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>

          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};
