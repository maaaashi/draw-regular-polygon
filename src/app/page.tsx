'use client'

import ComplexPlaneChart from '@/components/ComplexChart'
import { FormEvent, useState } from 'react'

export type Point = {
  x: number
  y: number
  rad: number
}

export default function Home() {
  const [userInput, setUserInput] = useState('3')

  const A: Point = {
    x: Math.cos(Math.PI / 2),
    y: Math.sin(Math.PI / 2),
    rad: Math.PI / 2,
  }
  const B: Point = {
    x: Math.cos((Math.PI * 7) / 6),
    y: Math.sin((Math.PI * 7) / 6),
    rad: (Math.PI * 7) / 6,
  }
  const C: Point = {
    x: Math.cos((Math.PI * 11) / 6),
    y: Math.sin((Math.PI * 11) / 6),
    rad: (Math.PI * 11) / 6,
  }
  const [data, setData] = useState<Point[]>([A, B, C, A])

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!+userInput || +userInput < 2) return

    let changeData: Point[] = [A]
    do {
      const last = changeData[changeData.length - 1]
      const rad = last.rad + (2 * Math.PI) / +userInput
      const point: Point = {
        x: Math.cos(rad),
        y: Math.sin(rad),
        rad,
      }
      changeData.push(point)
    } while (Math.sin(changeData[changeData.length - 1].rad) !== 1)

    setData(changeData)
  }

  return (
    <main className='flex flex-col items-center p-5 h-full'>
      <ComplexPlaneChart data={data} />
      <form onSubmit={submitHandler} className='flex'>
        <input
          type='text'
          value={userInput}
          className='input w-full max-w-xs'
          onChange={(e) => {
            setUserInput(e.target.value)
          }}
        />
        <button className='btn btn-primary' type='submit'>
          作成
        </button>
      </form>
    </main>
  )
}
