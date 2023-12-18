import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WeatherProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather Data',
  description: 'Live weather data based on your selected location',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </body>
    </html>
  )
}
