'use client'

import Head from 'next/head'
import ChapterButton from '@/components/ChapterButton'
import { useState } from 'react'

export default function Home() {
  const chapters = [
    // Template for adding a new chapter button.
    // href: URL to redirect the user when the button is clicked.
    // imgSrc: Path to the chapter logo image.
    // altText: Description for the logo image (for accessibility and tooltips).
    // title: Text displayed below the logo.
    {
      href: '/chapters/uf',
      imgSrc: '/uf_logo.png',
      altText: 'University of Florida Logo',
      title: 'University of Florida',
    },
    {
      href: '/chapters/ucf',
      imgSrc: '/ucf_logo.png',
      altText: 'University of Central Florida Logo',
      title: 'University of Central Florida',
    },
    {
      href: 'https://forms.gle/AYU1hvrr7vmy9fAB9',
      imgSrc: '/add_logo.png',
      altText: 'Create a New Chapter Logo',
      title: 'Create a New Chapter',
    },
  ]

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

  return (
    <div>
      <Head>
        <title>Off the Battlefield - Chapters</title>
        <meta
          name="description"
          content="Helping veterans connect with compassionate companions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Main section with a responsive grid layout for chapter buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px',
              maxWidth: '1000px',
              width: '100%',
            }}
          >
            {/* Render chapter buttons dynamically based on the chapters array */}
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
        </div>
      </main>

      <footer>
        {/* Footer with copyright information */}
        <p>Off the Battlefield &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
