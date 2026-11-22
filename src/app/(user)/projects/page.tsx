'use client'

import ChapterButton from '@/components/ChapterButton'
import { useState } from 'react'

export default function Home() {
  const chapters = [
    // Template for adding a new project button.
    // href: URL to redirect the user when the button is clicked.
    // imgSrc: Path to the project logo image.
    // altText: Description for the logo image (for accessibility and tooltips).
    // title: Text displayed below the logo.
    {
      href: '/projects/uri',
      imgSrc: '/logos/uri-logo.png',
      altText: 'Ukraine Rebuilding Initiative Logo',
      title: 'Ukraine Rebuilding Initiative',
    },
    {
      href: '/projects/ccai',
      imgSrc: '/logos/ccai-logo.svg',
      altText: 'Civically Combatting Antisemitism and Islamophobia Logo',
      title: 'Civically Combatting Antisemitism and Islamophobia',
    },
    {
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSf-u4SOEj789A7rxFc3W8N53iYcbu6u_IeACqt7-i8waQezGw/viewform',
      imgSrc: '/add_logo.png',
      altText: 'Create a New Chapter Logo',
      title: 'Create a New Chapter',
    },
  ]

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

  return (
    <main className="pt-24 flex justify-center items-center">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '32px',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {chapters.map((chapter, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              backgroundColor:
                hoveredCardIndex === index ? '#d9f99d' : '#ffffff', // lime-100
              transform:
                hoveredCardIndex === index ? 'scale(1.02)' : 'scale(1)',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <ChapterButton data={chapter} />
          </div>
        ))}
      </div>
    </main>
  )
}
