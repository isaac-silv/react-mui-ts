import { Container, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseProps {
  children: ReactNode;
  AppToolbar: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, AppToolbar }) => {
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Container maxWidth='xl'>
      <Box height='100%' display='flex' flexDirection='column' gap={1}>
        <Box>
          {AppToolbar}
        </Box>
        <Box flex={1} overflow='auto' paddingX={theme.spacing(3)} mt={theme.spacing(4)}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
