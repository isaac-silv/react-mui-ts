import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { controllers } from 'chart.js';
import { W } from 'chart.js/dist/chunks/helpers.core';
import Chart from 'react-apexcharts';

export const Donutchart = () =>
{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  return(
    <Grid>
      <Chart
        width={smDown ? '330px' : '416px'}
        type="donut"
        series={[45500.75, 7000, 4000, 3615.33, 2000]}

        options={{
          labels: ['Salários', 'Reformas', 'Recursos', 'Alimentação', 'Outros'],
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
