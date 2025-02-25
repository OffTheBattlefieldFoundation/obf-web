'use server'

import { db } from '@/config/firebase'
import { addDoc, collection } from 'firebase/firestore'

const addSubmission = async (formData: { title: string; content: string }) => {
  const collectionRef = collection(db, 'submissions')

  await addDoc(collectionRef, {
    title: formData.title,
    time_submitted: new Date(),
    content: formData.content,
  })
}

export { addSubmission }
