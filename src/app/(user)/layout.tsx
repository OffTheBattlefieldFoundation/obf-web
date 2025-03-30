import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Navbar />
        {children}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
