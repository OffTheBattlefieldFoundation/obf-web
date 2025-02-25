import arcjet, { detectBot, slidingWindow } from '@arcjet/next'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { NextResponse } from 'next/server'

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

// https://docs.arcjet.com/integrations/nextauth
// https://docs.arcjet.com/get-started?f=next-js
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ['ip.src'], // Track requests by IP
  rules: [
    slidingWindow({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      interval: 60, // tracks requests across a 60 second sliding window
      max: 10, // allow a maximum of 10 requests
    }),
    detectBot({
      mode: 'LIVE', // will block requests. Use "DRY_RUN" to log only
      allow: [
        // See the full list at https://arcjet.com/bot-list
        // 'CATEGORY:SEARCH_ENGINE', // Google, Bing, etc
        // 'CATEGORY:MONITOR', // Uptime monitoring services
        'CATEGORY:PREVIEW', // Link previews e.g. Slack, Discord
      ],
    }),
  ],
})

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
