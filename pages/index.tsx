import Head from 'next/head'
import Link from 'next/link'
import st from '../src/styles/main.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>JBarlow Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome me
        </h1>
      </main>

      <Link href="/post/test-post"><a>Test Post</a></Link>
    </div>
  )
}
