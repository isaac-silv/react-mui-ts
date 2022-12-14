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

import { DespesasDonutChart } from './charts/DespesasDonutChart';
import { ReceitaAreaChart } from './charts/ReceitaAreaChart';


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
            <Box padding={theme.spacing(4)} pb={theme.spacing(0)} sx={{fontColor: '#70D242'}}>
              <Typography variant='h5'>
                MATRICULADOS NO PER??ODO
              </Typography>
              <Box display='flex' alignItems='center' color='#61CD2F'>
                <Add fontSize='medium' />
                <Typography variant='h1'>
                  50
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    pl: 1
                  }}
                >
                  +8%
                </Typography>
              </Box>
              <Typography
                variant='body1'
                sx={{
                  mt: -1
                }}
              >
                Novos alunos
              </Typography>
            </Box>
            <AlunosAreaChart />
          </Box>
        </Grid>

        <Grid item container spacing={4}>

          <Grid item container xs={mdDown ? 12 : 6}>
            <ReceitaAreaChart />
          </Grid>

          <Grid item container xs={mdDown ? 12 : 6}>
            <DespesasDonutChart />
          </Grid>
        </Grid>
      </Grid>
    </LayoutBase>
  );
};
