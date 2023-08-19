'use client'

import ComplexPlaneChart from '@/components/ComplexChart'
import { FC, FormEvent, useEffect, useState } from 'react'

export type Point = {
  x: number
  y: number
  rad: number
}

const Home: FC = () => {
  // const [userInput, setUserInput] = useState('3')

  const [xValues, setXValue] = useState<number[]>([])
  const [yValues, setYValue] = useState<number[]>([])

  const myEquation = (x: number): number => Math.pow(x, 2)

  useEffect(() => {
    for (let x = -10; x <= 10; x += 0.1) {
      const y = myEquation(x)
      console.log(y)
      setXValue((c) => [...c, xValues.push(x)])
      setYValue((c) => [...c, yValues.push(y)])
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
        pointRadius: 5,
      },
    ],
  }

  const options = {
    aspectRatio: 1,
    scales: {
      x: {
        display: true,
        max: 10,
        min: -10,
      },
      y: {
        display: true,
        max: 100,
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    // if (!+userInput || +userInput < 2) return
  }

  return (
    <main className='flex flex-col items-center p-5 h-full'>
      <h2>正n/m角形</h2>
      {/* {xValues.map((v, i) => {
        return <div key={i}>{v}</div>
      })}
      {yValues.map((v, i) => {
        return <div key={i}>{v}</div>
      })} */}
      <ComplexPlaneChart data={chartData} options={options} />
      {/* <form onSubmit={submitHandler} className='flex items-center gap-5'>
        <div>
          <span>正</span>
          <input
            type='text'
            value={userInput}
            className='input input-bordered input-primary w-32'
            onChange={(e) => {
              setUserInput(e.target.value)
            }}
          />
          <span>角形</span>
        </div>
        <button className='btn btn-primary' type='submit'>
          作成
        </button>
      </form> */}
    </main>
  )
}

export default Home
