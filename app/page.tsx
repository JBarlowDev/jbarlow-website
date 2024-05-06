import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-6xl font-bold text-orange-600">
          Home
        </h1>
        <Link href="/posts">Blog Posts</Link>
      </main>
    </div>
  )
}
