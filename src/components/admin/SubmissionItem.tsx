'use client'
import DOMPurify from 'dompurify'
import ArticleStyleWrapper from '@/components/article/ArticleStyleWrapper'

export type SubmissionType = {
  id: string
  content?: string
  title?: string
  time_submitted?: Date
}

export default function SubmissionItem({ title, content }: SubmissionType) {
  return (
    <ArticleStyleWrapper>
      <h1>{title}</h1>

      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content ?? ''),
        }}
      />
    </ArticleStyleWrapper>
  )
}
