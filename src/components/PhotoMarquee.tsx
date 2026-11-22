// A photo with its pixel size, so the browser can reserve its true shape
// before the image loads.
export interface MarqueePhoto {
  src: string
  width: number
  height: number
}

interface PhotoMarqueeProps {
  // Each row scrolls on its own; photos keep their own shape (no cropping).
  rows: MarqueePhoto[][]
  children: React.ReactNode
  className?: string
  // Seconds for one full loop of the first row; later rows run a little
  // slower so the rows drift apart.
  durationSeconds?: number
}

// A section whose faded photos scroll slowly to the left behind the content.
// Each row is rendered twice side by side and shifted by half its width, so
// the loop is seamless. Motion stops for visitors who prefer reduced motion
// (see .photo-marquee-track in globals.css).
export default function PhotoMarquee({
  rows,
  children,
  className = '',
  durationSeconds = 90,
}: PhotoMarqueeProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 flex flex-col">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="min-h-0 flex-1 overflow-hidden">
            <div
              className="photo-marquee-track flex h-full w-max"
              style={{
                animationDuration: `${durationSeconds * (1 + rowIndex * 0.25)}s`,
              }}
            >
              {[...row, ...row].map((photo, i) => (
                <img
                  key={`${photo.src}-${i}`}
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  alt=""
                  loading="lazy"
                  className="h-full w-auto max-w-none shrink-0 opacity-70"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-lime-50/50 via-lime-50/30 to-lime-50/60"
      />
      <div className="relative">{children}</div>
    </section>
  )
}
