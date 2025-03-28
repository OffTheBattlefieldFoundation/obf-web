import React from 'react'
import Gallery from '@/components/Gallery'

interface GallerySectionProps {
  galleryStyles: React.CSSProperties
  pictures: string[]
}

export default function GallerySection({
  galleryStyles,
  pictures,
}: GallerySectionProps) {
  return (
    <>
      <div style={{ margin: '1% 40% 0% 5%', ...galleryStyles }}>
        <span style={{ color: 'green' }}>#</span>&nbsp;Gallery
      </div>

      <div
        style={{
          margin: '1% 5% 5% 5%',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...galleryStyles,
        }}
      >
        <div style={{ marginTop: '10px', color: '#282F34', fontSize: 16 }}>
          <Gallery pictures={pictures} />
        </div>
      </div>
    </>
  )
}
