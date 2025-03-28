import Mission from '@/components/Mission'
import HomePageBanner from '@/components/HomePageBanner'
import Gallery from '@/components/Gallery'

export const metadata = {
  title: 'Off the Battlefield Foundation - Home',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function Home() {
  const pictures = [
    '/URI-E-board.JPG',
    '/Mikhail_and_Nizhyn_Mayor.png',
    '/Mikhail_and_Gainesville_Mayor.jpg',
  ]

  return (
    <div>
      <main>
        <HomePageBanner />
        <Mission />
        <Gallery pictures={pictures} />
      </main>

      <footer>
        <p>Off the Battlefield Foundation ©{new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
