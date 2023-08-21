import Graph from '../Graph'

const Normal = () => {
  const equation = (pow: number, x: number) => Math.pow(x, pow)
  return (
    <div className='flex flex-col items-center'>
      <p>
        y = x<sup>n</sup>
      </p>
      <Graph equation={equation} />
    </div>
  )
}

export default Normal
