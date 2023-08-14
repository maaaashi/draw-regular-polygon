import ComplexPlaneChart from '@/components/ComplexChart'

export default function Home() {
  const data = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1.732 },
    { x: -1, y: 0 },
  ]

  return (
    <main className='h-screen'>
      <ComplexPlaneChart data={data} />
    </main>
  )
}
