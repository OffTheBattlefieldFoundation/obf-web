'use client'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export default function MyNavbar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })
  return (
    <AppBar className={trigger ? "bg-lime-50" : "bg-lime-25"} elevation={trigger ? 1 : 0}>
      <div className="p-2 px-8">
        <Toolbar>
          <Image
            className="inline"
            src="/logo.png"
            alt="logo"
            width="48"
            height="48"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            Off The Battlefield
          </Typography>
          <button className="text-custom-1">Login</button>
        </Toolbar>
      </div>
    </AppBar>
  )
}
