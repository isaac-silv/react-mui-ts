import { SupervisedUserCircle } from '@mui/icons-material';
import { Avatar, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';


export const ColabCard = () => {

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
          <Typography>
            COLABORADORES
          </Typography>

          <Typography sx={{flexGrow: 1, fontSize: '30px', fontWeight: 500}}>
            12
          </Typography>
        </Box>
        <Avatar
          sx={{
            bgcolor: '#f44336',
            color: '#fff',
            width: 60,
            height: 60
          }}>
          <SupervisedUserCircle sx={{flexGrow: 0}} />
        </Avatar>
      </Box>
    </Card>
  );
};
