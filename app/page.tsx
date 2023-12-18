'use client'

import { PlacesAutocomplete } from './components'
import { Weather } from './containers'
import { useWeather } from './hooks'

export default function Home() {
  const { weather } = useWeather()

  const isNight = weather ? !weather.isDay : false

  return (
    <main className={`flex min-h-screen flex-col items-center p-24${isNight ? ' night' : ''}`}>
      <PlacesAutocomplete />
      <Weather />
    </main>
  )
}
