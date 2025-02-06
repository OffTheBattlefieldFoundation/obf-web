import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  )
}
