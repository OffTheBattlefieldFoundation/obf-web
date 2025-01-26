import type { Metadata } from 'next'

import {
  getAllArticleIds,
  getArticleData,
  getArticleMetaData,
} from '../../../../lib/articles'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id
  const postData = await getArticleMetaData(id)

  return {
    title: postData.title,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const postData = await getArticleData(id)

  return (
    <div>
      <main>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />

        <style>
          {`h1 {
          color: red;
          }`}
        </style>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible values for id
  const paths = getAllArticleIds()
  return {
    paths,
    fallback: false,
  }
}
