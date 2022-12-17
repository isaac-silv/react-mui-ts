import { AttachMoney, CurrencyExchange, TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

export const ReceitaAreaChart = () =>
{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return(
    <Box
      component={Paper}
      sx={{
        borderRadius: theme.spacing(1),
        padding: theme.spacing(4),
        width: '100%'
      }}
    >
      <Box sx={{ display: 'flex' }}>
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
          <TrendingUp />
        </Avatar>

      </Box>

      <Divider sx={{mt: theme.spacing(2)}} />

      <Box>
        <Chart
          width='100%'
          height='100%'
          type='bar'
          series={[
            {
              name: '2021',
              data: [82000, 85000, 83000, 92000, 90000, 100000, 85000, 93000, 78000, 80000, 85000, 82000]
            }
          ]}

          options={{
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            colors:[theme.palette.primary.light],

            dataLabels:{
              enabled: false,
            },

            chart: {
              toolbar: {
                show: false,
              },
              sparkline: {
                enabled: true
              }
            },

            plotOptions: {
              bar: {
                borderRadius: 8,
              }
            },

            tooltip: {
              enabled: true,
              y: {
                formatter: function(val) {
                  return val.toLocaleString('pt-BR', {
                    style: 'currency', currency: 'BRL'
                  });
                }
              }
            },

            xaxis: {
              tooltip: {
                enabled: false
              },
              labels: {
                show: false
              },
            },

            yaxis: {
              show: false,
            },

          }}
        />
      </Box>

      <Box
        pt={theme.spacing(4)}
        display='flex'
        alignItems='center'
        justifyContent='space-around'
      >

        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Avatar variant='circular' sx={{bgcolor: '#57CA22', color: '#fff'}}>
              <AttachMoney />
            </Avatar>
          </Box>
          <Box pl={theme.spacing(1)}>
            <Typography
              sx={{
                fontWeight: 300
              }}
            >
              Total no ano
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 800,
                mt: theme.spacing(-1),
              }}
            >
              R$ 1.035.000
            </Typography>
          </Box>
        </Box>

        <Box>
          <Divider orientation='vertical' flexItem/>
        </Box>

        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Avatar variant='circular' sx={{bgcolor: theme.palette.secondary.main, color: '#fff'}}>
              <CurrencyExchange />
            </Avatar>
          </Box>
          <Box pl={theme.spacing(1)}>
            <Typography
              sx={{
                fontWeight: 300
              }}
            >
              Último mês
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: 800,
                mt: theme.spacing(-1)
              }}
            >
              R$ 82.000
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};