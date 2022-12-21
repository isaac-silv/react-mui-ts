import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactNode } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext, useAppThemeContext } from '../../contexts';
import { GitHub, LinkedIn } from '@mui/icons-material';

interface IAppThemeProviderProps {
  children: ReactNode
}

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ label, icon, to }) => {

  const theme = useTheme();

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
  };
  return (
    <ListItemButton
      selected={!!match}
      onClick={handleClick} sx={{
        borderRadius: theme.spacing(1),
      }}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label}/>
    </ListItemButton>
  );
};

export const SideBar: React.FC<IAppThemeProviderProps> = ({ children }) => {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const { isDrawerOpen, setIsDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={lgDown ? !isDrawerOpen : isDrawerOpen}
        variant={lgDown ? 'temporary' : 'persistent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
          padding={theme.spacing(2)}
        >

          <Box
            width='100%'
            height={theme.spacing(6)}
            display='flex'
            alignItems='center'
            justifyContent='center'
            pb={theme.spacing(2)}
          >
            <Typography variant='h4' sx={{fontWeight: 500}}>
              SCHOOL
            </Typography>
          </Box>

          <Divider />

          <Box flex={1}>
            <List
              component='nav'
              onClick={lgDown ? toggleDrawerOpen : undefined}
            >
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  key={drawerOption.path}
                  to={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                />
              ))}
            </List>
          </Box>

          <Box
            component={Paper}
            bgcolor={theme.palette.primary.main}
            color='#fff'
          >
            <Box display='flex'  p={theme.spacing(2)}>
              <Avatar variant='rounded' src={'https://avatars.githubusercontent.com/u/99730793?v=4'}>

              </Avatar>
              <Box ml={theme.spacing(2)}>
                <Typography sx={{fontSize: '17px', fontWeight: 600}}>
                  Isaac Silva
                </Typography>
                <Typography sx={{fontSize: '12px', fontWeight: 300}}>
                  Desenvolvedor FullStack
                </Typography>
              </Box>
            </Box>
            <Divider />
            <Box
              display='flex'
              justifyContent='center'
              bgcolor={theme.palette.primary.light}
              p={theme.spacing(2)}
              gap={theme.spacing(2)}
            >
              <Button
                size='small'
                variant='contained'
                startIcon={<GitHub />}
                color='success'
                href='https://github.com/isaac-silv'
              >
                Github
              </Button>
              <Button
                size='small'
                variant='contained'
                startIcon={<LinkedIn />}
                color='info'
              >
                LinkedIn
              </Button>
            </Box>
          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={lgDown ? 0 : isDrawerOpen ? theme.spacing(32) : 0}>
        {children}
      </Box>
    </>
  );
};
