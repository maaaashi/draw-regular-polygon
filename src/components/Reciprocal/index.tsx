import React from 'react'
import Graph from '../Graph'

const Reciprocal = () => {
  const equation = (n: number, x: number) => 1 / Math.pow(x, n)

  return (
    <>
      <p>
        y = 1 / x<sup>n</sup>
      </p>
      <Graph equation={equation} />
    </>
  )
}

export default Reciprocal
