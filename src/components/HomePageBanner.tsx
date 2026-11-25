'use client'
import React from 'react'
import Link from 'next/link'
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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/donate"
            className="inline-block rounded-full bg-[#007a1d] px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#006317] hover:shadow-xl"
          >
            Donate ♥
          </Link>
          <a
            href="#our-work"
            onClick={(event) => {
              // Glide down to the section instead of jumping there. Visitors
              // who prefer reduced motion still jump straight to it.
              const target = document.getElementById('our-work')
              if (!target) return
              event.preventDefault()
              const reduce = window.matchMedia(
                '(prefers-reduced-motion: reduce)',
              ).matches
              target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
              history.replaceState(null, '', '#our-work')
            }}
            className="inline-block rounded-full border-2 border-green-700 bg-white/70 px-6 py-3 font-semibold text-green-800 transition-colors hover:bg-white"
          >
            See our work ↓
          </a>
        </div>
      </div>
    </div>
  )
}
