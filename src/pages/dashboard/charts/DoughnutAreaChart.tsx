import { TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import { controllers } from 'chart.js';
import { W } from 'chart.js/dist/chunks/helpers.core';
import Chart from 'react-apexcharts';

export const DoughnutAreChart = () =>
{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return(
    <Box
      component={Paper}
      sx={{
        borderRadius: theme.spacing(1),
        padding: theme.spacing(4)
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

      <Chart
        width='100%'
        height='100%'
        type="donut"
        series={[45500.75, 7000, 4000, 3615.33, 2000]}

        options={{
          labels: ['Salários', 'Reformas', 'Recursos', 'Alimentação', 'Outros'],
          colors:['#673ab7', '#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9'],

          plotOptions:{
            pie:{
              customScale: 1.5,
              donut:{
                labels:{
                  show: true,
                  value: {

                    formatter: function (w) {

                      const format = Number(w).toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL'
                      });

                      return format;
                    }
                  },
                  total:{
                    show: true,
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

          legend: {
            show: true,
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
        }}
      />
    </Box>
  );
};
