'use client'

import { useState, createContext, Dispatch, SetStateAction, FC, PropsWithChildren } from 'react'

import { Weather } from '../utils/models'

export interface iWeatherContext {
  weather: Weather | null,
  setWeather: Dispatch<SetStateAction<iWeatherContext['weather']>>,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>,
}

export const WeatherContext = createContext<iWeatherContext>({ weather: null, setWeather: () => { }, loading: false, setLoading: () => {} })

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <WeatherContext.Provider value={{ weather, setWeather, loading, setLoading }}>
      {children}
    </WeatherContext.Provider>
  )
}
