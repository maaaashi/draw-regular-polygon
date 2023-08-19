'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [pathname, setPathname] = useState('')

  const isActive = (href: string) => {
    let className = 'pt-3 flex-1 flex justify-center'
    if (pathname === href) className = className + ' border-t-2'

    return className
  }

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <div className='flex w-full items-center justify-around pb-3 h-16'>
      <Link
        href='/'
        className={isActive('/')}
        onClick={() => {
          setPathname('/')
        }}
      >
        <button>正n/m角形</button>
      </Link>
      <Link
        href='/n-order-function'
        className={isActive('/n-order-function')}
        onClick={() => {
          setPathname('/n-order-function')
        }}
      >
        <button>n/m次関数</button>
      </Link>
    </div>
  )
}

export default Footer
