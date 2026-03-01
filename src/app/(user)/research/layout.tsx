import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import type { ReactNode } from 'react'

export default async function ResearchLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession()

  if (!session) {
    notFound()
  }

  return <>{children}</>
}
