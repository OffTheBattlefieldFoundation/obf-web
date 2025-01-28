import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      return user.email === 'alvi.abrar29@gmail.com'
    },
  },
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
