import Image from 'next/image'

import { WeatherIndicator } from '../components'
import { useWeather } from '../hooks'
import { getDirectionName } from '../utils'

export const Weather = () => {
  const { weather } = useWeather()

  if (!weather) {
    return null
  }

  return (
    <div className="flex gap-12 mt-16">
      <div>
        <WeatherIndicator
          temperature={weather.temperature}
          weatherCode={weather.weatherCode}
          isDay={weather.isDay}
          locationInfo={weather.locationInfo}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-center">
          Feels Like {Math.floor(weather.apparentTemperature)}&#176;C
        </p>

        <div className="flex gap-4">
          <Image
            src="/humidity.svg"
            width={80}
            height={80}
            title="humidity at 2 meters from the ground"
            alt="humidity"
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-lg">
              {Math.round(weather.humidity)}%
            </p>
            <p className="font-extralight text-sm">Humidity</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/wind.svg"
            width={80}
            height={80}
            title="wind"
            alt="wind"
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-lg">
              {Math.round(weather.windSpeed)} Km/h
            </p>
            <p className="font-extralight text-sm">Wind Speed</p>
            <div className="flex">
              <Image
                src="/arrow_direction.svg"
                style={{ transform: `rotate(${Math.floor(weather.windDirection) - 90}deg)` }}
                width={30}
                height={30}
                title="wind direction at 10 meters from the ground"
                alt="wind direction"
                priority
              />
              <span>{getDirectionName(weather.windDirection)}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/elevation.svg"
            width={80}
            height={80}
            title="elevation from the sea level"
            alt="elevation"
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-lg">
              {Math.round(weather.elevation)} meters
            </p>
            <p className="font-extralight text-sm">Elevation</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Image
            src="/visibility.svg"
            width={80}
            height={80}
            title="visibility"
            alt="visibility"
            priority
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-lg">
              {Math.round(weather.visibility)} meters
            </p>
            <p className="font-extralight text-sm">Visibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}
