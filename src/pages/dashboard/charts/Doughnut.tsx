import { controllers } from 'chart.js';
import { W } from 'chart.js/dist/chunks/helpers.core';
import Chart from 'react-apexcharts';

export const Donutchart = () =>
{
  return(

    <Chart
      width={400}
      type="donut"
      series={[45500.75, 3000, 4000]}

      options={{
        labels: ['Salários', 'Reformas', 'Alimentação'],
        colors:['#FFB400', '#A5978B'],
        title:{
          // text: ,
          // align:"center",
        },

        plotOptions:{
          pie:{
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

  );
};
