import { School } from '@mui/icons-material';
import { Avatar, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';


export const ProfessoresCard = () => {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        padding: 4,
        gap: 4
      }}>
      <Box display='flex'>
        <Box sx={{flexGrow: 1}}>
          <Typography variant='body1'>
            PROFESSORES
          </Typography>

          <Typography variant='h1'>
            22
          </Typography>
        </Box>
        <Avatar
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: '#fff',
            width: 60,
            height: 60
          }}>
          <School sx={{flexGrow: 0}} />
        </Avatar>
      </Box>
    </Card>
  );
};
