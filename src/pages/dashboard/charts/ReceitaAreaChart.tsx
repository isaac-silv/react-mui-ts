import { AttachMoney, CurrencyExchange, TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Divider, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { height } from '@mui/system';
import Chart from 'react-apexcharts';
import { useAppThemeContext } from '../../../shared/contexts';

export const ReceitaAreaChart = () =>
{
  const theme = useTheme();
  const { themeName } = useAppThemeContext();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return(
    <Box
      component={Paper}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(smDown ? 2 : 4),
        width: '100%',
      }}
    >
      <Box display='flex' alignItems='center' flexGrow={1}>
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
          }}
        >
          RECEITA
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

      <Box flexGrow={1}>
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
              theme: themeName === 'dark' ? 'dark' : 'light',
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
        justifyContent='space-around'
        flexGrow={0}
      >

        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              variant='circular'
              sx={{
                bgcolor: '#57CA22',
                color: '#fff',
                width: 40,
                height: 40
              }}
            >
              <AttachMoney />
            </Avatar>
          </Box>
          <Box pl={theme.spacing(1)}>
            <Typography variant='caption'>
              Total no ano
            </Typography>
            <Typography variant={lgDown ? 'h5' : 'h4'} sx={{lineHeight: '0.5em'}}>
              R$ 1.035.000
            </Typography>
          </Box>
        </Box>

        <Box display='flex' width='100%' alignItems='center' justifyContent='center'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              variant='circular'
              sx={{
                bgcolor: theme.palette.secondary.main,
                color: '#fff',
                width: 40,
                height: 40
              }}
            >
              <CurrencyExchange />
            </Avatar>
          </Box>
          <Box pl={theme.spacing(1)}>
            <Typography variant='caption'>
              Último mês
            </Typography>
            <Typography variant={lgDown ? 'h5' : 'h4'} sx={{lineHeight: '0.5em'}}>
              R$ 82.000
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};
