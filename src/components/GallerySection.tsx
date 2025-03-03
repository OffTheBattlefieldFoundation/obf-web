'use client'
import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface GallerySectionProps {
  galleryStyles: React.CSSProperties
  pictures: Array<{ original: string; thumbnail: string }>
}

export default function GallerySection({
  galleryStyles,
  pictures,
}: GallerySectionProps) {
  return (
    <>
      <style>
        {`
          .gallery-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            overflow: hidden;
            border-radius: 5%; /* ✅ Rounded corners */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .gallery-item img {
            width: 100%;
            object-fit: cover;
            border-radius: 5%; /* ✅ Rounded corners */
          }

          .image-gallery-slide img {
            border-radius: 5%; /* ✅ Rounded corners */
            object-fit: cover;
            width: 100%;
            display: block;
            margin: auto;
          }
        `}
      </style>

      <div style={{ margin: '1% 40% 0% 5%', ...galleryStyles }}>
        <span style={{ color: 'green' }}>#</span>&nbsp;Galleries
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
          {/* ✅ Rounded Corner Image Gallery */}
          <ImageGallery
            items={pictures}
            showThumbnails={false}
            showPlayButton={false}
          />
          {/* ✅ End of Fixed Photo Gallery Section */}
        </div>
      </div>
    </>
  )
}
