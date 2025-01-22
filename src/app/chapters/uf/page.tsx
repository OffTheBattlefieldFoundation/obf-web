import VideoPlayer from '@/components/VideoPlayer'
import ContentSection from '@/components/RoleDescription'

export const metadata = {
  title: 'Off the Battlefield Foundation - University of Florida Chapter',
  description: 'Helping veterans connect with compassionate companions.',
}

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
    description: {
      chapter_name: 'University of Florida Chapter',
      background_color: 'white',
      borderColor: 'green',
      borderRadius: '15px',
      borderWidth: '4px',
      padding: '10px 20px',
      fontSize: '14px',
      fontWeight: 'bold',
      textColor: '#333',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
  }

  const descriptionStyles = {
    backgroundColor: settings.description.background_color,
    border: `${settings.description.borderWidth} solid ${settings.description.borderColor}`,
    borderRadius: settings.description.borderRadius,
    padding: settings.description.padding,
    fontSize: settings.description.fontSize,
    fontWeight: settings.description.fontWeight,
    color: settings.description.textColor,
    boxShadow: settings.description.boxShadow,
    zIndex: 10,
  }

  const items = [
    {
      title: 'Civil Engineering',
      message:
        'Working with UF engineering students and Nizhyn city civil engineers to support the repair of a damaged aeration pond vital to Nizhyn’s water infrastructure and the Oster River, a primary water source for Kyiv and downstream communities. In partnership with Nizhyn Lyceum, we will collect necessary data, fundraise for construction materials, assist in blueprint design, and promote environmental stewardship through a public awareness campaign.',
    },
    {
      title: 'Public Health',
      message:
        'Collaborating with Feeding Futures, Gators for Refugee Medical Relief (GRMR), and the UF Ukrainian Student Association to distribute care packages with essential grains, non-perishable foods, and first-aid medical supplies, addressing the urgent resident needs in Nizhyn.',
    },
    {
      title: 'Prosthetics',
      message:
        'Partnering with Generational Relief in Prosthetics (GRiP) to design affordable prostheses for veteran and civilian amputees. Our team has already scanned a Nizhyn veteran’s arm and began working on 3D model development for the prototype.',
    },
    {
      title: 'Agriculture',
      message:
        'Collaborating with Nizhyn Lyceum, PK Yonge, and UF Internet of Things Students Club (IoT) to continue developing an AI-driven submarine drone for water quality monitoring. We will conduct interviews with local farmers, which will inform the drone’s implementation and highlight how conflict disrupts Ukraine’s water and agriculture sectors, amplifying their voices globally.',
    },
    {
      title: 'Cultural Affairs',
      message:
        'Partnering with the UF International Center (UFIC) and Nizhyn Gogol State University (NGSU) to facilitate virtual student exchanges, fostering intercultural dialogue and resilience. Training for UF participants will be developed in collaboration with UF’s Counseling and Wellness Center (CWC) and the English Language Institute (ELI).',
    },
  ]

  return (
    <>
      <main style={{ margin: 0, padding: 0 }}>
        <div style={{ margin: '20px 0', padding: '5% 5% 1% 5%' }}>
          <VideoPlayer
            videoSettings={settings.video}
            overlaySettings={settings.overlay}
            logoSettings={settings.logo}
          />
        </div>

        <ContentSection
          descriptionStyles={descriptionStyles}
          items={items}
          chapterName={settings.description.chapter_name}
        />
      </main>
    </>
  )
}
