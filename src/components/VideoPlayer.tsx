// Define TypeScript types for the props
interface VideoSettings {
  src: string
  type: string
  autoPlay: boolean
  loop: boolean
  muted: boolean
  width: string
  height: string
  borderRadius: string
  borderColor: string
  borderWidth: string
  poster?: string | null
}

interface OverlaySettings {
  backgroundColor: string
  borderColor: string
  borderRadius: string
  borderWidth: string
  padding: string
  boxShadow: string
  text: string
  textColor: string
  fontSize: string
  fontWeight: string
}

interface LogoSettings {
  src: string
  alt: string
  height: string
  marginRight: string
}

// Props for the VideoPlayer component
interface VideoPlayerProps {
  videoSettings: VideoSettings
  overlaySettings: OverlaySettings
  logoSettings: LogoSettings
}

export default function VideoPlayer({
  videoSettings,
  overlaySettings,
  logoSettings,
}: VideoPlayerProps) {
  const posterUrl = videoSettings.poster || null

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: videoSettings.borderRadius,
        overflow: 'hidden',
        border: `${videoSettings.borderWidth} solid ${videoSettings.borderColor}`,
      }}
    >
      <video
        autoPlay={videoSettings.autoPlay}
        loop={videoSettings.loop}
        muted={videoSettings.muted}
        controls
        poster={posterUrl || undefined}
        style={{
          width: videoSettings.width,
          height: videoSettings.height,
          borderRadius: videoSettings.borderRadius,
        }}
      >
        <source src={videoSettings.src} type={videoSettings.type} />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with the logo and text */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: overlaySettings.backgroundColor,
          borderRadius: overlaySettings.borderRadius,
          border: `${overlaySettings.borderWidth} solid ${overlaySettings.borderColor}`,
          padding: overlaySettings.padding,
          display: 'flex',
          alignItems: 'center',
          fontSize: overlaySettings.fontSize,
          fontWeight: overlaySettings.fontWeight,
          color: overlaySettings.textColor,
          boxShadow: overlaySettings.boxShadow,
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <img
          src={logoSettings.src}
          alt={logoSettings.alt}
          style={{
            height: logoSettings.height,
            marginRight: logoSettings.marginRight,
          }}
        />
        {/* Text */}
        {overlaySettings.text}
      </div>
    </div>
  )
}
