'use client'

import { useState, createContext, Dispatch, SetStateAction, FC, PropsWithChildren } from 'react'

import { Weather } from '../utils'

export interface iWeatherContext {
  weather: Weather | null,
  setWeather: Dispatch<SetStateAction<iWeatherContext['weather']>>
}

export const WeatherContext = createContext<iWeatherContext>({ weather: null, setWeather: () => { } })

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [weather, setWeather] = useState<Weather | null>(null)

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}
