'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'

export default function HomePageBanner() {
  return (
    <div className="w-full bg-lime-100 px-4 py-16 md:py-24">
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
      </div>
    </div>
  )
}
