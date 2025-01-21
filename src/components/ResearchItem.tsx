import React from 'react'
import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ weight: '500', subsets: ['latin'] })

export default function ResearchItem() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Image
        height={800}
        width={800}
        alt="kyiv city"
        src="/kyiv.jpg"
        style={{ width: 'auto', height: 'auto' }}
      />

      <div
        className={outfit.className}
        style={{
          position: 'absolute',
          top: 64,
          right: 0,
          height: 100,
          width: 400,
          padding: 8,
          paddingLeft: 24,
          filter: 'drop-shadow(-4px 8px 4px rgb(0, 0, 0, 0.5))',
          fontSize: 24,
          backgroundColor: 'rgb(189, 255, 134, 0.7)',
          backdropFilter: 'blur(2px)',
        }}
      >
        Insert good title here
      </div>
    </div>
  )
}
