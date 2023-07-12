import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className='bg-light-background/50 py-8 flex gap-16'>
      <Link href="/">Home</Link>
      <Link href="/posts">Blog</Link>
    </div>
  )
}
