import ResearchItem from '@/components/ResearchItem'

import { getSortedArticlesMetaData } from '../../../../lib/articles'

export const metadata = {
  title: 'Off the Battlefield Foundation - Research',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function ResearchPage() {
  const allArticlesMetaData = getSortedArticlesMetaData()

  return (
    <main className="pt-8 container mx-auto flex flex-col items-center">
      {allArticlesMetaData.map((articleMetaData, i) => (
        <div key={i} className="mb-24">
          <ResearchItem articleMetaData={articleMetaData} />
        </div>
      ))}
    </main>
  )
}
