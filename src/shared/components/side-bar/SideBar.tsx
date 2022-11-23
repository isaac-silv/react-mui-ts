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
import { Box, display } from '@mui/system';
import React, { ButtonHTMLAttributes, ReactNode, SetStateAction, useState } from 'react';
import { useDrawerContext } from '../../contexts';

interface IAppThemeProviderProps {
  children: ReactNode
}

export const SideBar: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >

          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Avatar sx={{
              height: theme.spacing(12),
              width: theme.spacing(12)}}
            />
          </Box>

          <Divider />

          <Box flex={1}>

            <List component='nav'>

              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Página inicial' />
              </ListItemButton>

            </List>

          </Box>

        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
