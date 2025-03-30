'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import LogoTitle from '@/components/LogoTitle'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import NavBarButton from '@/components/NavbarButton'

export default function MyNavbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (
    <AppBar
      className={trigger ? 'bg-lime-50' : 'bg-lime-25'}
      elevation={trigger ? 1 : 0}
    >
      <div className={`${trigger ? 'py-4' : 'py-10'} px-16 transition-all`}>
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
    </AppBar>
  )
}
