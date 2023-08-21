import React from 'react'
import Graph from '../Graph'

const Reciprocal = () => {
  const equation = (n: number, x: number) => Math.log(Math.pow(x, n))

  return (
    <div>
      <p>
        y = log<sub>e</sub>x<sup>n</sup>
      </p>
      <Graph equation={equation} />
    </div>
  )
}

export default Reciprocal
