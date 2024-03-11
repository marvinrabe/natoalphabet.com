import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NATO Alphabet',
  description: 'The NATO phonetic alphabet is a standardized system of phonetic code words used to represent letters of the alphabet in spoken communication.',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
    <body className={inter.className + ' bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-50'}>{children}</body>
    <GoogleAnalytics gaId="G-YH9Z22M5H3" />
    </html>
  )
}
