import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { getServerSession } from 'next-auth'

import SubmissionItem from '@/components/admin/SubmissionItem'
import type { SubmissionType } from '@/components/admin/SubmissionItem'

export default async function Submissions() {
  const session = await getServerSession()

  if (!session) {
    return null
  }

  const collectionRef = collection(db, 'submissions')
  const submissionCollectionSnapshot = await getDocs(collectionRef)

  const list: SubmissionType[] = submissionCollectionSnapshot.docs.map(
    (doc) => ({
      ...doc.data(),
      id: doc.id,
    }),
  )

  return (
    <>
      <h2 className="mt-4 text-xl font-medium">Submissions</h2>

      {list.map((submission) => (
        <div key={submission.id} className="border p-2 mt-2">
          <SubmissionItem {...submission} />
        </div>
      ))}
    </>
  )
}
