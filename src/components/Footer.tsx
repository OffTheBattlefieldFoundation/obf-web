import Title from '@/components/Title'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="h-48 bg-lime-950 text-lime-100">
      <div className="container mx-auto py-12 grid grid-cols-2 gap-4">
        <div className="flex justify-center">
          <Image
            priority
            className="inline"
            src="/obf_logo_light.png"
            alt="logo"
            width="48"
            height="48"
          />
          <Title className="flex flex-col justify-center" />
        </div>
        <div>
          © {new Date().getFullYear()} Off the Battlefield Foundation. All
          rights reserved.
        </div>
      </div>
    </div>
  )
}
