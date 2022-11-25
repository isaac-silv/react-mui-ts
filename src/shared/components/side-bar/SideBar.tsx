import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactNode, useState } from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext, useAppThemeContext } from '../../contexts';

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
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const { isDrawerOpen, setIsDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={mdDown ? !isDrawerOpen : isDrawerOpen}
        variant={mdDown ? 'temporary' : 'persistent'}
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
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar sx={{
              height: theme.spacing(6),
              width: theme.spacing(6)}}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List
              component='nav'
              sx={{
                '&& .Mui-selected, && .Mui-selected:hover': {
                  '&, & .MuiListItemIcon-root': {
                    color: theme.palette.primary.main,
                  },
                },
              }}
              onClick={mdDown ? toggleDrawerOpen : undefined}
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

          <Box>
            <List component='nav'>
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar tema" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={mdDown ? 0 : isDrawerOpen ? theme.spacing(32) : 0}>
        {children}
      </Box>
    </>
  );
};
