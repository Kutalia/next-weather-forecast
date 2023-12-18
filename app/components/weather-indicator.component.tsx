import { FC } from 'react'
import Image from 'next/image'

import { weatherCodes } from '../utils/constants/weather-codes'

interface iProps {
  temperature: number,
  weatherCode: number,
  isDay: number,
  locationInfo: string,
}

export const WeatherIndicator: FC<iProps> = ({ temperature, weatherCode, isDay, locationInfo }) => {
  const { description, icons } = weatherCodes[String(weatherCode)]

  return (
    <div className="text-center mt-16">
      <h3 className="text-6xl">{Math.floor(temperature)}&#176;C</h3>
      <p className="mt-2">{description}</p>
      <p className="mt-2">{locationInfo}</p>
      <Image
        src={icons[isDay ? 'day' : 'night']}
        width={200}
        height={200}
        title={description}
        alt={description}
        priority
      />
    </div>
  )
}
