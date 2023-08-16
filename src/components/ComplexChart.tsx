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
import { Point } from '@/app/page'
import { FC } from 'react'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

interface Props {
  data: Point[]
}

const ComplexChart: FC<Props> = ({ data }) => {
  const chartData = {
    datasets: [
      {
        data,
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
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
  }

  return (
    <div className='w-52 md:w-96'>
      <Scatter data={chartData} options={options} />
    </div>
  )
}

export default ComplexChart
