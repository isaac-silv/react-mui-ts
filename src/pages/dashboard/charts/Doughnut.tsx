import Chart from 'react-apexcharts';

function Donutchart()
{
  return(
    <>
      <Chart
        type="donut"
        series={[10, 20]}

        options={{
          labels: ['Teste1', 'Teste2'],
          colors:['#FFB400', '#A5978B'],
          title:{
            text: 'Medal Country Name',
            // align:"center",
          },

          plotOptions:{
            pie:{
              donut:{
                labels:{
                  show: true,
                  total:{
                    show: true,
                    showAlways: false,
                    // formatter: () => '343',
                  }
                }
              }
            }
          },

          dataLabels:{
            enabled: false,
          }
        }}
      />
    </>
  );
}
export default Donutchart;
