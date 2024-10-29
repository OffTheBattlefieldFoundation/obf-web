import React from 'react'
import './NavbarButton.css'
import Link from 'next/link'

type NavBarButtonProps = {
  label: string
  href: string
}

export default function NavbarButton({ label, href }: NavBarButtonProps) {
  return (
    <Link href={href}>
      <button className="mybutton bg-gradient-to-r from-lime-500 from-50% to-lime-950 to-50%">
        {label}
      </button>
    </Link>
  )
}
