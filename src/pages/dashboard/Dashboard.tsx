import { Add } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Icon, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import { AppToolbar } from '../../shared/components';
import { useAuthContext } from '../../shared/contexts';
import { LayoutBase } from '../../shared/layouts';
import { AlunosCard } from './cards/AlunosCard';
import { ColabCard } from './cards/ColabCard';
import { ProfessoresCard } from './cards/ProfessoresCard';
import { TurmasCard } from './cards/TurmasCard';
import { AlunosAreaChart } from './charts/AlunosAreaChart';

import { Donutchart } from './charts/Doughnut';
import { ReceitaChart } from './charts/Receita';


export const Dashboard = () => {

  const { user } = useAuthContext();

  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LayoutBase
      AppToolbar={(
        <AppToolbar />
      )}
    >
      <Grid container spacing={4}>
        <Grid item container spacing={4} xs={mdDown ? 12 : 8}>
          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <AlunosCard />
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <ProfessoresCard />
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <ColabCard />
            </Box>
          </Grid>

          <Grid item xs={smDown ? 12 : mdDown ? 6 : 6}>
            <Box component={Paper}>
              <TurmasCard />
            </Box>
          </Grid>

        </Grid>
        <Grid item container xs={mdDown ? 12 : 4}>
          <Box component={Paper} display='flex' flexDirection='column' width='100%' padding={0}>
            <Box padding={4} sx={{fontColor: '#70D242'}}>
              <Typography
                sx={{
                  fontSize: lgDown ? '1.3rem' : '1rem',
                  fontWeight: 500,
                }}
              >
                MATRICULADOS NO ANO
              </Typography>
              <Box display='flex' alignItems='center' color='#61CD2F'>
                <Add fontSize='medium' />
                <Typography
                  sx={{
                    fontSize: lgDown ? '0.8rem' : '42px',
                    fontWeight: 800,
                  }}
                >
                  50
                </Typography>
                <Typography
                  sx={{
                    fontSize: lgDown ? '0.8rem' : '1rem',
                    fontWeight: 300,
                    pl: 1
                  }}
                >
                  +8%
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: lgDown ? '0.8rem' : '1rem',
                  fontWeight: 300,
                  mt: -2
                }}
              >
                Novos alunos
              </Typography>
            </Box>
            <AlunosAreaChart />
          </Box>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item xs={mdDown ? 12 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1),
              }}
              container
              direction='column'
            >
              <Grid sx={{ display: 'flex', padding: theme.spacing(2) }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontSize: lgDown ? '1.2rem' : '1.3rem',
                    fontWeight: 400
                  }}
                >
                  Receita
                </Typography>

                <Avatar
                  sx={{
                    flexGrow: 0,
                    bgcolor: theme.palette.primary.main,
                    color: '#ffffff'
                  }}
                  variant='rounded'
                >
                  <Icon>
                    trending_up
                  </Icon>
                </Avatar>

              </Grid>
              <Divider />
              <Grid item container sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding: theme.spacing(2)
              }}>
                <ReceitaChart />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={mdDown ? 12 : 6}>
            <Grid
              component={Paper}
              sx={{
                borderRadius: theme.spacing(1),
              }}
              container
              direction='column'
            >
              <Grid sx={{ display: 'flex', padding: theme.spacing(2) }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    fontSize: lgDown ? '1.2rem' : '1.3rem',
                    fontWeight: 400
                  }}
                >
                  Despesas
                </Typography>

                <Avatar
                  sx={{
                    flexGrow: 0,
                    bgcolor: theme.palette.primary.main,
                    color: '#ffffff'
                  }}
                  variant='rounded'
                >
                  <Icon>
                    trending_down
                  </Icon>
                </Avatar>

              </Grid>
              <Divider />
              <Grid item container sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding: theme.spacing(2)
              }}>
                <Donutchart />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
