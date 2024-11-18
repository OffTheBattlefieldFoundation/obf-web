import Head from 'next/head'
import Mission from '@/components/Mission'
import HomePageBanner from '@/components/HomePageBanner'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Off the Battlefield - Home</title>
        <meta
          name="description"
          content="Helping veterans connect with compassionate companions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageBanner />

      <main>
        <Mission />

        <Gallery />
      </main>

      <footer>
        <p>Off the Battlefield © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
