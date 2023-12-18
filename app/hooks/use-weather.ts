import { useEffect, useContext, useCallback } from 'react'

import { getCurrentCoordinates, fetchWeather } from '../utils'
import { WeatherContext } from '../providers'

export const useWeather = () => {
  const { weather, setWeather } = useContext(WeatherContext)

  const getWeather = useCallback(async (latitude: number, longitude: number) => {
    try {
      const newWeather = await fetchWeather(latitude, longitude)
      setWeather(newWeather)
      return newWeather
    } catch (err) {
      console.log(err)
    }
  }, [setWeather])

  const getWeatherFromCurrentLocation = useCallback(() => {
    getCurrentCoordinates()
      .then((coordinates) => getWeather(coordinates.latitude, coordinates.longitude))
      .catch(err => {
        console.log(err)
      })
  }, [getWeather])

  return { weather, getWeather, getWeatherFromCurrentLocation }
}
