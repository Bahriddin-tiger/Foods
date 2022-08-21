import React from "react";
import ReactApexChart from "react-apexcharts"
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [ 75, 50, 70,0],
        options: {
          chart: {
            height: 210,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: '',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          colors: ["#65B0F6","#FFB572","#FF7CA3","#1F1D2B"],
          labels: ['Delivery', 'To Go', 'Dine In' ],
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={210} height={210} />
</div>


      );
    }
  }
  export {ApexChart }