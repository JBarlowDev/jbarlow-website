import { getAllPostIds, getPostData, PostData } from "../../../src/utils/posts"
import Link from 'next/link'
import React from 'react'

type PostPageData = {
  postData: PostData
}

type PostPageParams = {
  params: {
    id: string
  }
}

export default async function Post(props: PostPageParams) {
  const { postData } = await getPageData(props.params.id)

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

const getPageData = async (id: string): Promise<PostPageData> => {
  const postData = await getPostData(id)

  return {
    postData,
  }
}

