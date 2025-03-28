'use server'

import { db } from '@/config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { format } from 'date-fns'

const addSubmission = async (formData: {
  title: string
  content: string
}): Promise<boolean> => {
  const collectionRef = collection(db, 'submissions')

  try {
    const docRef = await addDoc(collectionRef, {
      title: formData.title,
      time_submitted: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      content: formData.content,
    })
    return docRef.id != null
  } catch (_e) {
    return false
  }
}

const addArticle = async (title: string, content: string) => {
  const collectionRef = collection(db, 'articles')

  try {
    const docRef = await addDoc(collectionRef, {
      title,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      content,
    })
    return docRef.id != null
  } catch (_e) {
    return false
  }
}

export { addSubmission, addArticle }
