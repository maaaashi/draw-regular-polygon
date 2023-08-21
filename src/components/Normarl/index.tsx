import Graph from '../Graph'

const Normal = () => {
  const equation = (pow: number, x: number) => Math.pow(x, pow)
  return (
    <>
      <p>
        y = x<sup>n</sup>
      </p>
      <Graph equation={equation} />
    </>
  )
}

export default Normal
