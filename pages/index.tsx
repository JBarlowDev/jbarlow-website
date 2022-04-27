import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-stone-800 min-h-screen'>
      <Head>
        <title>JBarlow Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold text-red-500">
          Welcome me
        </h1>
      </main>

      <Link href="/post/test-post"><a>Test Post</a></Link>
    </div>
  )
}
