import Mission from '@/components/Mission'
import HomePageBanner from '@/components/HomePageBanner'
import Gallery from '@/components/Gallery'

export const metadata = {
  title: 'Off the Battlefield Foundation - Home',
  description: 'Helping veterans connect with compassionate companions.',
}

export default function Home() {
  return (
    <div>
      <main>
        <HomePageBanner />
        <Mission />
        <Gallery />
      </main>

      <footer>
        <p>Off the Battlefield © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
