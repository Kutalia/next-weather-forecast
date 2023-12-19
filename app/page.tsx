'use client'

import { Rubik } from 'next/font/google'

import { PlacesAutocomplete } from './components'
import { Weather } from './containers'
import { useWeather } from './hooks'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  const { weather, loading } = useWeather()

  const isNight = weather ? !weather.isDay : false

  return (
    <main className={`${rubik.className} flex min-h-screen flex-col items-center p-24${isNight ? ' night' : ''}`}>
      <PlacesAutocomplete />
      {
        !loading
          ? <Weather />
          : <div className="spinner" />
      }
    </main>
  )
}
