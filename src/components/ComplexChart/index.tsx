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
  data: any
  options: any
}

const ComplexChart: FC<Props> = ({ data, options }) => {
  return (
    <div className='w-52 md:w-96 p-5 aspect-square'>
      <Scatter
        data={data}
        options={options}
        className='aspect-square rotate-infinite'
      />
    </div>
  )
}

export default ComplexChart
