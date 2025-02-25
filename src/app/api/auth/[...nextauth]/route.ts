import arcjet from '@arcjet/next'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { NextResponse } from 'next/server'

import { ajconfig } from '@/config/arcjet'

const allowedUsers = ['AsirAAlam', 'GoodMishka']

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ profile }: any) {
      return allowedUsers.includes(profile.login)
    },
  },
}

const handler = NextAuth(authOptions)
const aj = arcjet(ajconfig)

const ajProtectedPOST = async (req: Request, res: Response) => {
  // Protect with Arcjet
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  // Then call the original handler
  return handler(req, res)
}

export { handler as GET, ajProtectedPOST as POST }
