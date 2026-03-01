import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar isAdmin={session != null} />
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
