import Head from 'next/head'
import VideoPlayer from '@/components/VideoPlayer'

export default function Home() {
  const settings = {
    video: {
      src: '/Off the Battlefield Foundation - Ukraine Rebuilding Initiative (URI) Launch Video.mp4?v=1',
      type: 'video/mp4',
      autoPlay: true,
      loop: true,
      muted: false,
      width: '100%',
      height: 'auto',
      borderRadius: '15px',
      borderColor: '#f9fcf0',
      borderWidth: '4px',
      poster: '/preview_uf_chapter.png',
    },
    overlay: {
      backgroundColor: '#f9fcf0',
      borderColor: 'green',
      borderRadius: '15px',
      borderWidth: '4px',
      padding: '10px 20px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      text: 'University of Florida Chapter',
      textColor: '#333',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    logo: {
      src: '/uf_logo.png',
      alt: 'University of Florida Chapter Logo',
      height: '40px',
      marginRight: '10px',
    },
  }

  return (
    <>
      <Head>
        <meta name="description" content="A webpage with a video player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ margin: 0, padding: 0 }}>
        <div style={{ margin: '20px 0', padding: '5%' }}>
          <VideoPlayer
            videoSettings={settings.video}
            overlaySettings={settings.overlay}
            logoSettings={settings.logo}
          />
        </div>
      </main>
    </>
  )
}
