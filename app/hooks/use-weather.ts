import { useContext, useCallback, useState } from 'react'

import { fetchWeather } from '../utils'
import { WeatherContext } from '../providers'

export const useWeather = () => {
  const { weather, setWeather, loading, setLoading } = useContext(WeatherContext)

  const loadWeather = useCallback(async (latitude: number, longitude: number, locationInfo?: string) => {
    try {
      setLoading(true)
      const newWeather = await fetchWeather(latitude, longitude)
      setWeather(locationInfo ? { ...newWeather, locationInfo } : newWeather)
      return newWeather
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [setWeather, setLoading])

  return { weather, loadWeather, loading }
}
