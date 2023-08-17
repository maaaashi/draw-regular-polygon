import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DRP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' data-theme='dark'>
      <body className='flex flex-col h-screen overflow-y-hidden'>
        <Header />
        <div className='container mx-auto flex-1 h-[200px] overflow-y-auto'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
