import { useEffect, useState } from 'react';
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
  Divider,
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import { useAppThemeContext, useAuthContext, useDrawerContext } from '../../contexts';
import { useTheme } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';


export const AppToolbar: React.FC = () => {

  const [ busca, setBusca ] = useState<string>('');

  const { toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logout } = useAuthContext();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [ searchAnchor, setSearchAnchor ] = useState<null | HTMLElement>(null);

  const handleOpenSearchList = (event: React.MouseEvent<HTMLElement>) => {
    setSearchAnchor(event.currentTarget);
  };

  const handleCloseSearchList = () => {
    setSearchAnchor(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Toolbar disableGutters sx={{paddingX: theme.spacing(smDown ? 2 : 3)}}>

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
              width: smDown ? 180 : 300,
              height: 40,
              paddingX: 0
            }}
          >
            <InputBase
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onClick={handleOpenSearchList}
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
          <Menu
            sx={{ mt: '45px' }}
            id="search-list"
            anchorEl={searchAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(searchAnchor)}
            onClose={handleCloseSearchList}
          >
            <MenuItem onClick={handleCloseSearchList} sx={{width: smDown ? 200 : 250,}}>
              <Typography textAlign="center">Resultado da busca...</Typography>
            </MenuItem>
          </Menu>
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
            <Avatar
              src='https://www.svgrepo.com/show/81103/avatar.svg'
              sx={{
                height: theme.spacing(5),
                width: theme.spacing(5)
              }}
            />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: theme.spacing(2),
                pl: theme.spacing(8),
                pr: theme.spacing(8),
                gap: theme.spacing(1)
              }}
            >
              <Avatar
                src='https://www.svgrepo.com/show/81103/avatar.svg'
                sx={{
                  width: 60,
                  height: 60
                }}
              />
              <Typography textAlign="center"  sx={{fontWeight: 700}}>{user?.nome}</Typography>
            </Box>

            <Divider />

            <MenuItem onClick={handleCloseUserMenu} sx={{gap: theme.spacing(1)}}>
              <Settings
                sx={{
                  width: 18,
                  height: 18
                }}
              />
              <Typography textAlign="center">Configurações</Typography>
            </MenuItem>

            <MenuItem onClick={logout}  sx={{gap: theme.spacing(1)}}>
              <Logout
                sx={{
                  width: 18,
                  height: 18
                }}
              />
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>

          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};
