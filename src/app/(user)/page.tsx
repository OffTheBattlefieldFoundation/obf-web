import Mission from '@/components/Mission'
import HomePageBanner from '@/components/HomePageBanner'
import FeaturedProject from '@/components/FeaturedProject'

export const metadata = {
  title: 'Off the Battlefield Foundation - Home',
  description:
    'Rebuilding and healing communities affected by war, starting with the Ukraine Rebuilding Initiative.',
}

export default function Home() {
  return (
    <main>
      <HomePageBanner />
      <Mission />
      <FeaturedProject />
    </main>
  )
}
