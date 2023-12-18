import { FC } from 'react'
import Image from 'next/image'

import { weatherCodes } from '../utils/weather-codes'

interface iProps {
  temperature: number,
  weatherCode: number,
  isDay: number,
}

export const WeatherIndicator: FC<iProps> = ({ temperature, weatherCode, isDay }) => {
  const { description, icons } = weatherCodes[String(weatherCode)]

  return (
    <div>
      <h3 className="text-6xl">{Math.floor(temperature)}&#176;C</h3>
      <Image
        src={icons[isDay ? 'day' : 'night']}
        width={200}
        height={200}
        alt={description}
        priority
      />
    </div>
  )
}
