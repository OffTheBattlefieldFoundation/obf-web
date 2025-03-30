'use client'
import './NavbarButton.css'
import { useState } from 'react'
import Link from 'next/link'
import useScrollTrigger from '@mui/material/useScrollTrigger'

type NavBarButtonProps = {
  label: string
  href: string
  // Using React.ReactNode[] doesn't work for a single child
  children?: React.ReactNode | React.ReactNode[]
}

export default function NavbarButton({
  label,
  href,
  children,
}: NavBarButtonProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  // If there is a single child, use an array of size 1
  const childrenArray: React.ReactNode[] | null =
    children != null
      ? children.constructor === Array
        ? children
        : [children]
      : null

  return (
    <div
      onMouseLeave={() => setIsHovering(false)}
      className="flex flex-col justify-center relative"
    >
      <Link href={href}>
        <button
          className="mybutton bg-gradient-to-r from-lime-600 from-50% to-lime-950 to-50%"
          onMouseEnter={() => setIsHovering(true)}
        >
          {label}
        </button>
      </Link>

      {isHovering && childrenArray != null && (
        <div
          className={
            'fixed min-w-20 p-2 flex flex-col bg-stone-50 rounded-md shadow-xl transition-all'
          }
          style={{ top: trigger ? 60 : 84 }}
        >
          {childrenArray.map((child, i) => (
            <div key={i} className="py-2">
              {child}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
