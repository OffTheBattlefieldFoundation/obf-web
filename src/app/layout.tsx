import { Inter } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-lime-25 mt-24'}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
          <Toaster position="top-right" richColors />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
