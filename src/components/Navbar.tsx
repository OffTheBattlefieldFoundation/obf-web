'use client'
import React from 'react'
import LogoTitle from '@/components/LogoTitle'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import NavBarButton from '@/components/NavbarButton'

export default function MyNavbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <div
      className={
        'fixed top-0 z-10 w-full transition-all ease-out ' +
        (trigger ? 'bg-lime-50' : 'bg-lime-25')
      }
      style={{ boxShadow: trigger ? '0px 0px 2px 0px' : 'none' }}
    >
      <div
        className={`${trigger ? 'py-4' : 'py-10'} px-16 transition-all ease-out`}
      >
        <div className="flex">
          <LogoTitle className="text-[#009b25]" />

          <div className="flex space-x-8 ml-12">
            <NavBarButton label="Home" href="/" />
            <NavBarButton label="Chapters" href="/chapters" />
            <NavBarButton label="Research" href="/research">
              <NavBarButton
                label="Publish Your Article"
                href="/research/publish"
              />
            </NavBarButton>
            <NavBarButton label="Donate" href="/donate" />
          </div>
        </div>
      </div>
    </div>
  )
}
