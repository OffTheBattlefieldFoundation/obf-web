import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

import LogoTitle from '@/components/LogoTitle'

function Socials() {
  return (
    <div className="flex gap-4">
      <Button variant="ghost" size="icon">
        <a
          target="_blank"
          href="https://www.instagram.com/offthebattlefield"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ width: '2em', height: '2em' }} />
        </a>
      </Button>
      <Button variant="ghost" size="icon">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/off-the-battlefield-foundation/"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: '2em', height: '2em' }} />
        </a>
      </Button>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="h-48 bg-lime-950 text-lime-100">
      <div className="container mx-auto py-12 grid grid-cols-2 gap-4">
        <div className="flex justify-center">
          <LogoTitle variant="light" />
        </div>
        <div>
          <Socials />

          <div className="mt-4">
            © {new Date().getFullYear()} Off the Battlefield Foundation. All
            rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
