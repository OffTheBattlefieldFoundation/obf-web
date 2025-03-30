import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Off the Battlefield Foundation - Donate',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
