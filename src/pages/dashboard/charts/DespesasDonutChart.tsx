import { AttachMoney, Construction, EmojiFoodBeverage, Engineering, LocalAtm, TrendingDown } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

export const DespesasDonutChart = () =>
{
  const theme = useTheme();
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return(
    <Box
      component={Paper}
      sx={{
        borderRadius: theme.spacing(1),
        padding: theme.spacing(xsDown ? 2 : 4),
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant='body1'
          sx={{
            flexGrow: 1,
          }}
        >
          DESPESAS
        </Typography>

        <Avatar
          sx={{
            flexGrow: 0,
            bgcolor: theme.palette.primary.main,
            color: '#ffffff'
          }}
          variant='rounded'
        >
          <TrendingDown />
        </Avatar>

      </Box>

      <Divider sx={{mt: theme.spacing(2), mb: theme.spacing(4)}} />

      <Grid container>
        <Grid xs={smDown ? 12 : 7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Chart
            width='100%'
            type="donut"
            series={[45500.75, 7000, 4000, 3615.33]}

            options={{
              labels: ['Salários', 'Reformas', 'Recursos', 'Alimentação'],
              colors:['#673ab7', '#7e57c2', '#9575cd', '#b39ddb'],

              plotOptions:{
                pie:{
                  donut:{
                    labels:{
                      show: false,
                      value: {

                        formatter: function (w) {

                          const format = Number(w).toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL'
                          });

                          return format;
                        }
                      },
                      total:{
                        show: false,
                        showAlways: false,
                        formatter: function (w) {
                          const result = w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
                          const format = result.toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL'
                          });
                          return format;
                        }
                      }
                    }
                  }
                }
              },

              chart: {
                sparkline: {
                  enabled: false
                }
              },

              legend: {
                show: false,
                position: 'bottom'
              },

              stroke: {
                colors: ['#673ab7', '#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9']
              },

              dataLabels:{
                enabled: false,
              },

              tooltip: {
                y: {
                  formatter: function(val) {
                    return val.toLocaleString('pt-BR', {
                      style: 'currency', currency: 'BRL'
                    });
                  }
                }
              },

              grid: {
                show: false,
                padding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }
              },
            }}
          />
        </Grid>

        <Grid xs={smDown ? 12 : 5} container>

          <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' gap={theme.spacing(2)}>

            <Box width='100%' display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Avatar
                  variant='circular'
                  sx={{
                    bgcolor: '#673ab7',
                    color: '#fff',
                    width: 40,
                    height: 40
                  }}>
                  <LocalAtm sx={{width: 20, height: 20,}} />
                </Avatar>
              </Box>
              <Box pl={theme.spacing(1)}>
                <Typography variant='caption'>
                  Salários
                </Typography>
                <Typography variant={lgDown ? 'h5' : 'h4'}>
                  R$ 45.500,75
                </Typography>
              </Box>
            </Box>

            <Box display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Avatar
                  variant='circular'
                  sx={{
                    bgcolor: '#7e57c2',
                    color: '#fff',
                    width: 40,
                    height: 40
                  }}>
                  <Engineering sx={{width: 20, height: 20,}} />
                </Avatar>
              </Box>
              <Box pl={theme.spacing(1)}>
                <Typography variant='caption'>
                  Reformas
                </Typography>
                <Typography variant={lgDown ? 'h5' : 'h4'}>
                  R$ 7.000,00
                </Typography>
              </Box>
            </Box>

            <Box display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Avatar
                  variant='circular'
                  sx={{
                    bgcolor: '#9575cd',
                    color: '#fff',
                    width: 40,
                    height: 40
                  }}>
                  <Construction sx={{width: 20, height: 20,}} />
                </Avatar>
              </Box>
              <Box pl={theme.spacing(1)}>
                <Typography variant='caption'>
                  Recursos
                </Typography>
                <Typography variant={lgDown ? 'h5' : 'h4'}>
                  R$ 4.000,00
                </Typography>
              </Box>
            </Box>

            <Box display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Avatar
                  variant='circular'
                  sx={{
                    bgcolor: '#b39ddb',
                    color: '#fff',
                    width: 40,
                    height: 40
                  }}>
                  <EmojiFoodBeverage sx={{width: 20, height: 20,}} />
                </Avatar>
              </Box>
              <Box pl={theme.spacing(1)}>
                <Typography variant='caption'>
                  Alimentação
                </Typography>
                <Typography variant={lgDown ? 'h5' : 'h4'}>
                  R$ 3.615,33
                </Typography>
              </Box>
            </Box>

            <Box display='flex' alignItems='center'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Avatar
                  variant='circular'
                  sx={{
                    bgcolor: '#F44336',
                    color: '#fff',
                    width: 40,
                    height: 40
                  }}>
                  <AttachMoney sx={{width: 20, height: 20,}} />
                </Avatar>
              </Box>
              <Box pl={theme.spacing(1)}>
                <Typography variant='caption'>
                  Total
                </Typography>
                <Typography variant={lgDown ? 'h5' : 'h4'}>
                  R$ 60.116,08
                </Typography>
              </Box>
            </Box>

          </Box>

        </Grid>
      </Grid>
    </Box>
  );
};
