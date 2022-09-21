import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  return (
    <Line
      data={{
        labels: ['June','July','August', 'September',],
        datasets: [
          {
            label: 'Mantee Active',
            data: [12, 15, 20, 25],
            borderColor: 'red',
          },
          {
            label: 'Mantee Placement',
            data: [3, 4, 2, 4],
            borderColor: 'blue',
          },
          {
            label: 'Mantee Feedback',
            data: [10, 13, 15, 12],
            borderColor: 'green',
          },
        ],
      }}
      width={700}
      height={200}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default Chart;
