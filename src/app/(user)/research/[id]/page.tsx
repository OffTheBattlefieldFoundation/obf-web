import type { Metadata } from 'next'

import {
  getAllArticleIds,
  getArticleData,
  getArticleMetaData,
} from '../../../../../lib/articles'
import { parseISO, format } from 'date-fns'

import './style.css'

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
    <main className="pt-16 container mx-auto">
      <div className="text-center">
        <h1 style={{ marginBottom: -24 }}>{postData.title}</h1>
        <br />
        <time>{format(parseISO(postData.date), 'LLLL d, yyyy')}</time>
        <br />
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </main>
  )
}

export function generateStaticParams() {
  return getAllArticleIds()
}
