'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function HomePageBanner() {
  return (
    <div className="w-full bg-[#009b25]/15 px-4 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-4xl font-bold text-lime-950">
          Off the Battlefield Foundation
        </h1>
        <h2 className="text-2xl text-lime-950">
          <div style={{ height: '1em' }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(80)
                  .typeString('Changing the World, One Conversation at a Time.')
                  .start()
              }}
            />
          </div>
        </h2>
        <a
          href="#our-work"
          className="mt-6 inline-block rounded-full bg-green-700 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-green-800"
        >
          See our work ↓
        </a>
      </div>
    </div>
  )
}
