import Image from 'next/image'

import { WeatherIndicator, WeatherDetail } from '../components'
import { useWeather } from '../hooks'
import { getDirectionName } from '../utils'

export const Weather = () => {
  const { weather } = useWeather()

  if (!weather) {
    return null
  }

  return (
    <div className="flex flex-col sm:flex-row gap-12 mt-16">
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

        <WeatherDetail
          iconUrl="/humidity.svg"
          iconTitle="humidity at 2 meters from the ground"
          iconAlt="humidity"
          text={`${Math.round(weather.humidity)}%`}
          description="Humidity"
        />

        <WeatherDetail
          iconUrl="/wind.svg"
          iconTitle="wind"
          iconAlt="wind"
          text={`${Math.round(weather.windSpeed)} Km/h`}
          description="Wind Speed"
        >
          <div className="flex">
            <Image
              src="/arrow_direction.svg"
              style={{ transform: `rotate(${Math.floor(weather.windDirection) - 90}deg)` }}
              width={25}
              height={25}
              title="wind direction at 10 meters from the ground"
              alt="wind direction"
              priority
            />
            <span>{getDirectionName(weather.windDirection)}</span>
          </div>
        </WeatherDetail>

        <WeatherDetail
          iconUrl="/elevation.svg"
          iconTitle="elevation from the sea level"
          iconAlt="elevation"
          text={`${Math.round(weather.elevation)} meters`}
          description="Elevation"
        />

        <WeatherDetail
          iconUrl="/visibility.svg"
          iconTitle="visibility"
          iconAlt="visibility"
          text={`${Math.round(weather.visibility)} meters`}
          description="Visibility"
        />
      </div>
    </div>
  )
}
