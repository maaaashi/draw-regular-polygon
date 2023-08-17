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
        pointRadius: 0,
      },
    ],
  }

  const options = {
    aspectRatio: 1,
    scales: {
      x: {
        display: false,
        max: 1,
        min: -1,
      },
      y: {
        display: false,
        max: 1,
        min: -1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
  }

  return (
    <div className='pt-20 md:pt-40 pb-20 md:pb-40 w-52 md:w-96'>
      <Scatter
        data={chartData}
        options={options}
        className='aspect-square rotate-infinite'
      />
    </div>
  )
}

export default ComplexChart
