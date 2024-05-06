import { getAllPostIds, getPostData, PostData } from "../../../src/utils/posts"
import Link from 'next/link'
import React from 'react'

export default async function Post({ params }: { params: { id: string } }) {
  const { postData } = await getPageData(params.id)

  if (!postData) {
    return <></>
  }

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

export const generateStaticParams = async () => {
  return getAllPostIds()
}

const getPageData = async (id: string) => {
  const postData = id ? await getPostData(id) : undefined

  if (!postData) {
    return {
      notFound: true,
    }
  }


  return {
    postData
  }
}

