// A photo, a photo with a CSS object-position (e.g. 'center top') that
// picks which part stays visible when the photo is cropped to fit, or a
// solid color block in place of a photo.
type Photo = string | { src: string; position: string } | { color: string }

interface PhotoBackdropProps {
  photos: Photo[]
  children: React.ReactNode
  className?: string
  // Tailwind grid classes for laying out the photos.
  gridClassName?: string
}

// A section whose photos sit behind the content, faded so the text stays
// readable. Used instead of a slideshow so every photo is visible at once.
export default function PhotoBackdrop({
  photos,
  children,
  className = '',
  gridClassName = 'grid-cols-2 md:grid-cols-3',
}: PhotoBackdropProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 grid ${gridClassName}`}
      >
        {photos.map((photo, i) => {
          if (typeof photo !== 'string' && 'color' in photo) {
            return (
              <div
                key={`color-${i}`}
                className="h-full w-full"
                style={{ backgroundColor: photo.color }}
              />
            )
          }
          const { src, position } =
            typeof photo === 'string'
              ? { src: photo, position: 'center' }
              : photo
          return (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-80"
              style={{ objectPosition: position }}
            />
          )
        })}
      </div>
      {/* A light wash of the OBF logo green (#009b25) over the photos. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#009b25]/15" />
      <div className="relative">{children}</div>
    </section>
  )
}
