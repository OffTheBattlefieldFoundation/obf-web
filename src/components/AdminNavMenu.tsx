'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'

function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign In</Button>
    </>
  )
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  )
}
