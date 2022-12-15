import { Groups2 } from '@mui/icons-material';
import { Avatar, Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';


export const AlunosCard = () => {

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.light,
        color: '#fff',
        padding: 4,
        gap: 4
      }}>
      <Box display='flex'>
        <Box sx={{flexGrow: 1}}>
          <Typography>
            ALUNOS
          </Typography>

          <Typography sx={{flexGrow: 1, fontSize: '30px', fontWeight: 500}}>
            460
          </Typography>
        </Box>
        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
            color: '#fff',
            width: 60,
            height: 60
          }}>
          <Groups2 sx={{flexGrow: 0}} />
        </Avatar>
      </Box>
    </Card>
  );
};
