import React from 'react'
import './NavbarButton.css'

type NavBarButtonProps = {
  label: string
}

export default function NavbarButton({ label }: NavBarButtonProps) {
  return (
    <button className="mybutton bg-gradient-to-r from-lime-500 from-50% to-lime-950 to-50%">
      {label}
    </button>
  )
}
