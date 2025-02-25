'use server'

import { db } from '@/config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { format } from 'date-fns'

const addSubmission = async (formData: { title: string; content: string }) => {
  const collectionRef = collection(db, 'submissions')

  await addDoc(collectionRef, {
    title: formData.title,
    time_submitted: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    content: formData.content,
  })
}

export { addSubmission }
