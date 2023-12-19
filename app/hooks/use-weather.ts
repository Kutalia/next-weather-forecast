import { useContext, useCallback, useState } from 'react'

import { fetchWeather } from '../utils'
import { WeatherContext } from '../providers'

export const useWeather = () => {
  const { weather, setWeather } = useContext(WeatherContext)
  const [loading, setLoading] = useState(false)

  const loadWeather = useCallback(async (latitude: number, longitude: number, locationInfo?: string) => {
    setLoading(true)
    try {
      const newWeather = await fetchWeather(latitude, longitude)
      setWeather(locationInfo ? { ...newWeather, locationInfo } : newWeather)
      setLoading(true)
      return newWeather
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }, [setWeather])

  return { weather, loadWeather, loading }
}
