import LogoTitle from '@/components/LogoTitle'

export default function Footer() {
  return (
    <div className="h-48 bg-lime-950 text-lime-100">
      <div className="container mx-auto py-12 grid grid-cols-2 gap-4">
        <div className="flex justify-center">
          <LogoTitle variant="light" />
        </div>
        <div>
          © {new Date().getFullYear()} Off the Battlefield Foundation. All
          rights reserved.
        </div>
      </div>
    </div>
  )
}
