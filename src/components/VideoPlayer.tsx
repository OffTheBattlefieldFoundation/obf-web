'use client'

import { useEffect, useRef, useState } from 'react'

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
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [posterUrl, setPosterUrl] = useState<string | null>(
    videoSettings.poster || null,
  )

  useEffect(() => {
    const capturePosterFrame = async () => {
      if (!videoSettings.poster && videoRef.current) {
        const video = videoRef.current

        // Wait for the video metadata to load
        await new Promise((resolve) => {
          video.addEventListener('loadeddata', resolve, { once: true })
        })

        // Seek to the first second
        video.currentTime = 1

        // Wait for the frame to render
        await new Promise((resolve) => {
          video.addEventListener('seeked', resolve, { once: true })
        })

        // Capture the frame into a canvas
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const ctx = canvas.getContext('2d')
        if (ctx) ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Generate a data URL for the poster
        const posterDataUrl = canvas.toDataURL('image/jpeg')
        setPosterUrl(posterDataUrl)
      }
    }

    capturePosterFrame()
  }, [videoSettings.poster])

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
        ref={videoRef}
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
