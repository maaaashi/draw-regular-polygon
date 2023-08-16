import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DRP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' className='bg-slate-800'>
      <body className='h-screen container mx-auto'>{children}</body>
    </html>
  )
}
