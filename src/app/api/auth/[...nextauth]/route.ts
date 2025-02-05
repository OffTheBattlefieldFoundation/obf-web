import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

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

export { handler as GET, handler as POST }
