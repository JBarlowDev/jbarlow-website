import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className='bg-background/50'>
      <p>Header</p>
			
      <Link href="/"><a>Home</a></Link>
    </div>
  )
}
