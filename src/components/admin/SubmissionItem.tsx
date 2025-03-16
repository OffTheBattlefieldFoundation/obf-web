'use client'
import DOMPurify from 'isomorphic-dompurify'
import ArticleStyleWrapper from '@/components/article/ArticleStyleWrapper'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export type SubmissionType = {
  id: string
  content?: string
  title?: string
  time_submitted?: string
}

async function handleApprove(title: string, content: string) {
  await fetch('/api/admin/approve_article', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
  }).then(async (res) => {
    if (res.status === 200) {
      toast.success('Article approved')
    } else {
      const error: string | undefined = (await res.json()).error
      toast.error(error)
    }
  })
}

export default function SubmissionItem({ title, content }: SubmissionType) {
  if (!title || !content) {
    return 'Empty submission'
  }

  return (
    <div>
      <div>
        <Button onClick={() => handleApprove(title, content)}>Approve</Button>
      </div>
      <ArticleStyleWrapper>
        <h1>{title}</h1>

        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(content ?? ''),
          }}
        />
      </ArticleStyleWrapper>
    </div>
  )
}
