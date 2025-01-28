import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import theme from '@/app/theme'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className + ' bg-lime-25 mt-24'}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <SessionProvider session={session}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SessionProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
