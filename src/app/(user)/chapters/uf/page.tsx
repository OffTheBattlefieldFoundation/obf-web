import VideoPlayer from '@/components/VideoPlayer'
import ContentSection from '@/components/RoleDescription'
import Alliances from '@/components/Alliances'
import GallerySection from '@/components/GallerySection'
import StudentInterestSection from '@/components/StudentInterestSection'

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
    alliances: {
      description:
        'The City of Gainesville created a Sister-City Alliance with the City of Nizhyn, a municipality in Ukraine. We hope to establish a local coalition of private and public sector partners who can contribute to the development of this relationship and uphold its longevity. Investment may vary, ranging from simple donations to launches of innovative projects, using the cities as case studies for specific developments. We envision a collaborative effort to showcase our cities as models for progress and development on a global scale.',
      bolded_description:
        'If you are a business, nonprofit, or organization in Gainesville that is interested in partnering up for the Gainesville-Nizhyn Sister City Alliance, please fill out this form.',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScoCK2K-MIGtrE5WIQFmYvbigMwgzp9QXY9jesKmSLGnVB1MQ/viewform',
    },

    galleryPictures: [
      '/uf_gallery/image1.jpg',
      '/uf_gallery/image2.jpg',
      '/uf_gallery/image3.jpg',
      '/uf_gallery/image4.jpg',
      '/uf_gallery/image5.jpg',
      '/uf_gallery/image6.jpg',
      '/uf_gallery/image7.jpg',
      '/uf_gallery/image8.jpg',
      '/uf_gallery/image9.jpg',
      '/uf_gallery/image10.jpg',
      '/uf_gallery/image11.jpg',
      '/uf_gallery/image12.jpg',
      '/uf_gallery/image13.jpg',
    ],
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

  const allianceStyles = {
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

  const galleryStyles = {
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

        <StudentInterestSection />

        <Alliances
          allianceStyles={allianceStyles}
          description={settings.alliances.description}
          bolded_description={settings.alliances.bolded_description}
          url={settings.alliances.url}
        />

        <GallerySection
          galleryStyles={galleryStyles}
          pictures={settings.galleryPictures}
        />
      </main>
    </>
  )
}
