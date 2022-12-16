import { Box, useMediaQuery, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';

export const AlunosAreaChart = () =>
{
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <Box height='100%' width='100%' paddingTop={0}>
      <Chart
        width='100%'
        height='100%'
        type='area'
        series={[
          {
            name: '2022',
            data: [430, 415, 420, 440, 460, 450, 447, 444, 451, 480, 474, 460]
          }
        ]}

        options={{
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          colors:['#673ab7'],

          dataLabels:{
            enabled: false,
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

          chart: {
            toolbar: {
              show: false,
            },
            sparkline: {
              enabled: true
            }
          },

          tooltip: {
            enabled: true,
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
  );
};
