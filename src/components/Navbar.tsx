'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
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
      <div className={`${trigger ? 'py-2' : 'py-8'} px-16 transition-all`}>
        <Toolbar>
          <Image
            className="inline"
            src="/logo.png"
            alt="logo"
            width="48"
            height="48"
          />
          <Typography variant="h6" component="div" color="primary">
            Off The Battlefield
          </Typography>

          <div className="flex space-x-8 ml-12">
            <NavBarButton label="Home" href="/" />
            <NavBarButton label="Chapters" href="/chapters" />
            <NavBarButton label="Get Involved" href="/getinvolved" />
            <NavBarButton label="Donate" href="/donate" />
            <NavBarButton label="Contact Us" href="/contactus" />
          </div>
        </Toolbar>
      </div>
    </AppBar>
  )
}
