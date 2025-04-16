import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'General Exchange',
  description: 'Find trusted contractors and services for your home improvement needs',
  icons: {
    icon: [
      { url: '/carriage.jpeg', type: 'image/jpeg' },
      { url: '/carriage.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/carriage.jpeg', sizes: '16x16', type: 'image/jpeg' }
    ],
    apple: [
      { url: '/carriage.jpeg', sizes: '180x180', type: 'image/jpeg' }
    ]
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/carriage.jpeg" />
        <meta name="theme-color" content="#3182CE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
} 