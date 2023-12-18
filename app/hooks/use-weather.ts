import { useContext, useCallback } from 'react'

import { fetchWeather } from '../utils'
import { WeatherContext } from '../providers'

export const useWeather = () => {
  const { weather, setWeather } = useContext(WeatherContext)

  const loadWeather = useCallback(async (latitude: number, longitude: number, locationInfo?: string) => {
    try {
      const newWeather = await fetchWeather(latitude, longitude)
      setWeather(locationInfo ? { ...newWeather, locationInfo } : newWeather)
      return newWeather
    } catch (err) {
      console.error(err)
    }
  }, [setWeather])

  return { weather, loadWeather }
}
