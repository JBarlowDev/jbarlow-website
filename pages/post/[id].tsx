import { getAllPostIds, getPostData, PostData } from "../../src/utils/posts"
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface PostProps {
  postData: PostData
}

export default function Post(props: PostProps) {
  const { postData } = props
  return (
    <>
      {postData.metadata.title}
      <br />
      {postData.id}
      <br />
      {postData.metadata.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      <Link href="/posts">See all</Link>
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (props: GetStaticPropsContext) => {
  const id = props.params.id
  const postData = await getPostData(id)
  return {
    props: {
      postData
    }
  }
}

