// A photo, or a photo with a CSS object-position (e.g. 'center top') that
// picks which part stays visible when the photo is cropped to fit.
type Photo = string | { src: string; position: string }

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
        {photos.map((photo) => {
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
              className="h-full w-full object-cover opacity-70"
              style={{ objectPosition: position }}
            />
          )
        })}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-lime-50/50 via-lime-50/30 to-lime-50/60"
      />
      <div className="relative">{children}</div>
    </section>
  )
}
