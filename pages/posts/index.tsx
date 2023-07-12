import { getSortedPostsData } from '../../src/utils/posts'
import Link from 'next/link'

const TestPost = (props: any) => {
  return (
    <>
      <section>
        <h2>Blog</h2>
        <ul>
          {props.allPostsData.map(({ id, date, title }) => (
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
    </>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default TestPost
