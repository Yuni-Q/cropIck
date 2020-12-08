import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const ProductionAndConsumptionAnalysis: React.FC<any> = () => {
  const options = {
    plugins: {
      datalabels: {
        display: false,
      }
    },
    legend: {
      display: true, // label 보이기 여부
    },
    scales: {
      xAxes: [{
        maxBarThickness: 50
      }],
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
        ticks: {
          max: 10000,
          min: 0
        }
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
        ticks: {
          max: 250000,
          min: 0
        }
      }]
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
  }
  const data = {
    // 각 막대별 라벨
    labels: [
      '2009', 
      '2010', 
      '2011', 
      '2012', 
      '2013', 
      '2014', 
      '2015', 
      '2016', 
      '2017', 
      '2018', 
      '2019', 
      '2020', 
    ],
    datasets: [
      {
        label: '생산량',
        yAxisID: 'B',
        type: 'line',
        borderWidth: 3, // 테두리 두께
        data: [120000, 120000, 120000, 170000,170000,220000,220000,170000,170000,200000,170000,200000], // 수치
        borderColor: "#3da11e",
        backgroundColor: "transparent",
        fill: true,
        lineTension: 0
      },
      {
        label: '지배면적',
        yAxisID: 'A',
        type: 'bar',
        borderWidth: 1, // 테두리 두께
        data: [7500, 4000, 4000, 5200, 7500,4500,5200,7000,7000,5200,7500, 7000], // 수치
        backgroundColor: ['#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d','#ffb38d', '#ffb38d'] // 각 막대 색
      },
    ]
  };
  return (
    <div>
          <div style={{ width: '100%', marginTop: 40 }}>
            <Bar
              data={data}
              options={options}
              height={300}
            />
          </div>
    </div>
  )
}

export default ProductionAndConsumptionAnalysis;
