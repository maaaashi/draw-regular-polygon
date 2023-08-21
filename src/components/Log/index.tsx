import React from 'react'
import Graph from '../Graph'

const Reciprocal = () => {
  const equation = (n: number, x: number) => Math.log(Math.pow(x, n))

  return (
    <>
      <p>
        y = log<sub>e</sub>x<sup>n</sup>
      </p>
      <Graph equation={equation} />
    </>
  )
}

export default Reciprocal
