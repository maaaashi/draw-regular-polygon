import { Range } from '@/app/n-order-function/page'
import React, { FC, FormEvent, useEffect, useState } from 'react'
import ComplexPlaneChart from '@/components/ComplexChart'

interface Props {
  equation(n: number, x: number): number
}

const Graph: FC<Props> = ({ equation }) => {
  const [userInput, setUserInput] = useState('2')

  const [xValues, setXValue] = useState<number[]>([])
  const [xRange, setXRange] = useState<Range>({ min: 0, max: 0 })
  const [yRange, setYRange] = useState<Range>({ min: 0, max: 0 })
  const [yValues, setYValue] = useState<number[]>([])

  useEffect(() => {
    for (let x = -10; x <= 10; x += 0.1) {
      const y = equation(+userInput, x)
      setXValue((c) => [...c, x])
      setYValue((c) => [...c, y])
      setXRange((c) => {
        return {
          max: c.max > x ? c.max : x,
          min: c.min > x ? x : c.min,
        }
      })
      setYRange((c) => {
        return {
          max: c.max > y ? c.max : y,
          min: c.min > y ? y : c.min,
        }
      })
    }
  }, [])

  const chartData = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
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
        display: true,
        max: xRange.max,
        min: xRange.min,
      },
      y: {
        display: true,
        max: yRange.max,
        min: yRange.min,
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

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!+userInput) return
    setXValue([])
    setYValue([])
    setXRange({
      min: 0,
      max: 0,
    })
    setYRange({
      min: 0,
      max: 0,
    })

    for (let x = -10; x <= 10; x += 0.1) {
      const y = equation(+userInput, x)
      setXValue((c) => [...c, x])
      setXRange((c) => {
        return {
          max: c.max > x ? c.max : x,
          min: c.min > x ? x : c.min,
        }
      })
      setYRange((c) => {
        return {
          max: c.max > y ? c.max : y,
          min: c.min > y ? y : c.min,
        }
      })
      setYValue((c) => [...c, y])
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <ComplexPlaneChart data={chartData} options={options} />
      <form onSubmit={submitHandler} className='flex items-center gap-5'>
        <div>
          <span>n = </span>
          <input
            type='text'
            value={userInput}
            className='input input-bordered input-primary w-32'
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          作成
        </button>
      </form>
    </div>
  )
}

export default Graph
