import Link from 'next/link'

import ResearchItem from '@/components/ResearchItem'
import { Button } from '@/components/ui/button'

import { getSortedArticlesMetaData } from '../../../lib/articles'

export const metadata = {
  title: 'Off the Battlefield Foundation - Research',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function ResearchPage() {
  const allArticlesMetaData = getSortedArticlesMetaData()

  return (
    <main className="pt-8 container mx-auto flex flex-col items-center">
      <Button>
        <Link href="/research/editor">Editor</Link>
      </Button>

      {allArticlesMetaData.map((articleMetaData, i) => (
        <div key={i} className="mb-24">
          <ResearchItem articleMetaData={articleMetaData} />
        </div>
      ))}
    </main>
  )
}
