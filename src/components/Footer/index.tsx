'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [pathname, setPathname] = useState('')

  const isActive = (href: string) => {
    if (pathname === href) return 'active'
    return ''
  }

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <div className='btm-nav'>
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
        <button>n次関数</button>
      </Link>
    </div>
  )
}

export default Footer
