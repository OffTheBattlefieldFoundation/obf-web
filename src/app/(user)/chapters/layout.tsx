import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off the Battlefield Foundation - Chapters',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
