import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  type: 'doughnut',
  labels: ['Shopping', 'Food', 'Sport'],
  datasets: [
    {
      label: 'Transactions',
      data: [45, 34, 67],
      borderWidth: 0,
      backgroundColor: ['#ffc89d', '#c0fbcf', '#96c3fa'],
      hoverOffset: 15
    }
  ]
};

const options: any = {
  responsive: true,
  cutout: 50,
  radius: '80%',
  rotation: 20,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      xAlign: 'center',
      yAlign: 'bottom'
    }
  }
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} height={200} width={200} />;
};

export default DoughnutChart;
