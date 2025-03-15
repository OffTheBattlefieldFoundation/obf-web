import ResearchItem from '@/components/ResearchItem'

import type { ArticleMetaData } from '../../../../lib/articles'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const metadata = {
  title: 'Off the Battlefield Foundation - Research',
  description: 'Helping veterans connect with compassionate companions.',
}

export default async function ResearchPage() {
  const collectionRef = collection(db, 'articles')

  // TODO: lazy fetch - group by pages
  const articlesCollectionSnapshot = await getDocs(collectionRef)

  // TODO: sort by date
  const articlesMetaData: ArticleMetaData[] =
    articlesCollectionSnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      date: doc.data().date,
    }))

  return (
    <main className="pt-8 container mx-auto flex flex-col items-center">
      {articlesMetaData.map((articleMetaData, i) => (
        <div key={i} className="mb-24">
          <ResearchItem articleMetaData={articleMetaData} />
        </div>
      ))}
    </main>
  )
}
