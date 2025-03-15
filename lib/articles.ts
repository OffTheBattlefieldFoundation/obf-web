import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

export interface ArticleMetaData {
  id: string
  title: string
  date: string
}

interface ArticleData extends ArticleMetaData {
  contentHtml: string
}

export async function getArticleData(id: string): Promise<ArticleData> {
  const docRef = doc(db, 'articles', id)
  const docSnap = await getDoc(docRef)

  // Combine the data with the id and contentHtml
  return {
    id,
    title: docSnap.data()?.title,
    date: docSnap.data()?.date,
    contentHtml: docSnap.data()?.content,
  }
}

export async function getArticleMetaData(id: string): Promise<ArticleMetaData> {
  const docRef = doc(db, 'articles', id)
  const docSnap = await getDoc(docRef)

  // Combine the data with the id and contentHtml
  return {
    id,
    title: docSnap.data()?.title,
    date: docSnap.data()?.date,
  }
}
