import React from 'react'
import { getSortedPostsData, PostSummaryData } from '../../src/utils/posts'
import Link from 'next/link'

type PostsProps = {
  postData: PostSummaryData[]
}

const TestPost = () => {
 
  const { postData } = getPosts()

  return (
    <>
      <main>
        <h1 className="text-6xl font-bold text-orange-600">
          Blog
        </h1>
        <section>
          <ul>
            {postData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/post/${id}`}>
                  {title}
                </Link>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}


const getPosts = (): PostsProps => {
  const allPostsData = getSortedPostsData()
  return {
      postData: allPostsData
    }
}

export default TestPost
