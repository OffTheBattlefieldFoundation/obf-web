import Image from 'next/image'
import { Philosopher } from 'next/font/google'

const philosopher = Philosopher({ weight: '400', subsets: ['latin'] })

interface Props {
  className?: string
  variant?: 'light' | 'default'
}

export default function Title({ className, variant = 'default' }: Props) {
  return (
    <div className="flex">
      <a className="flex flex-col justify-center" href="/">
        <Image
          priority
          className="inline"
          src={variant === 'default' ? '/obf_logo.png' : '/obf_logo_light.png'}
          alt="logo"
          width="48"
          height="48"
        />
      </a>
      <a className="flex flex-col justify-center" href="/">
        <div className={philosopher.className + ' text-2xl ' + className}>
          Off the Battlefield Foundation
        </div>
      </a>
    </div>
  )
}
