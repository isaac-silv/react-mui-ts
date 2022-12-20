import { Container, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';


interface ILayoutBaseProps {
  children: ReactNode;
  AppToolbar: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, AppToolbar }) => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth='xl' sx={{
      height:'100%'
    }}>
      <Box height='100%' display='flex' flexDirection='column' gap={1}>
        <Box>
          {AppToolbar}
        </Box>
        <Box flex={1} overflow='auto' paddingX={theme.spacing(smDown ? 2 : 3)} pt={theme.spacing(4)} pb={theme.spacing(4)}>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
