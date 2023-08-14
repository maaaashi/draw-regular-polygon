'use client'

import { Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const ComplexChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        data: data,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        showLine: true,
      },
    ],
  }

  const options = {
    aspectRatio: 1,
    scales: {
      y: {},
    },
    label: false,
  }

  return (
    <div className='w-2/5'>
      <Scatter data={chartData} options={options} />
    </div>
  )
}

export default ComplexChart
