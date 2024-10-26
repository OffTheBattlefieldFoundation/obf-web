import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image'

export default function MyNavbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Image
            className="inline"
            src="/logo.png"
            alt="logo"
            width="48"
            height="48"
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Off The Battlefield
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
