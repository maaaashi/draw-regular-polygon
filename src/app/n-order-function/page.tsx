'use client'

import ComplexPlaneChart from '@/components/ComplexChart'
import Log from '@/components/Log'
import Normal from '@/components/Normarl'
import Reciprocal from '@/components/Reciprocal'
import { FC, FormEvent, useEffect, useState } from 'react'

export type Point = {
  x: number
  y: number
  rad: number
}

export type Range = {
  min: number
  max: number
}

type Tab = 'normal' | 'reciprocal' | 'log'

const Graph: FC<{ type: Tab }> = ({ type }) => {
  switch (type) {
    case 'normal':
      return <Normal />
    case 'reciprocal':
      return <Reciprocal />
    case 'log':
      return <Log />
  }
}

const Home: FC = () => {
  const [tab, setTab] = useState<Tab>('normal')

  const tabClassName = (t: Tab) => {
    return tab === t ? 'tab tab-active' : 'tab'
  }

  return (
    <main className='flex flex-col items-center p-5 h-full'>
      <h2>n/m次関数</h2>
      <div className='tabs tabs-boxed'>
        <a
          onClick={() => {
            setTab('normal')
          }}
          className={tabClassName('normal')}
        >
          x
        </a>
        <a
          onClick={() => {
            setTab('reciprocal')
          }}
          className={tabClassName('reciprocal')}
        >
          1 / x
        </a>
        <a
          onClick={() => {
            setTab('log')
          }}
          className={tabClassName('log')}
        >
          log<sub>e</sub>x
        </a>
      </div>
      <Graph type={tab} />
    </main>
  )
}

export default Home
