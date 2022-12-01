import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { controllers } from 'chart.js';
import { W } from 'chart.js/dist/chunks/helpers.core';
import Chart from 'react-apexcharts';

export const ReceitaChart = () =>
{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Grid>
      <Chart
        width={smDown ? '300px' : mdDown ? '470px' : '400px'}
        type='bar'
        series={[
          {
            name: '2021',
            data: [82000, 85000, 83000, 92000, 90000, 100000, 85000, 93000, 78000, 80000, 85000, 82000]
          }
        ]}

        options={{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          colors:['#673ab7', '#7e57c2', '#9575cd', '#b39ddb', '#d1c4e9'],

          plotOptions:{
            pie:{
              donut:{
                labels:{
                  show: true,
                  value: {
                    fontSize: smDown ? '14px' : '20px',
                    fontWeight: 600,
                    offsetY: 0,
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
                    fontSize: smDown ? '12px' : '16px',
                    fontWeight: 300,
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
          }

        }}
      />
    </Grid>
  );
};
