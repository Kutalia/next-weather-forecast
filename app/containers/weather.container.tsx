import { WeatherIndicator } from '../components'
import { useWeather } from '../hooks'

export const Weather = () => {
  const { weather } = useWeather()

  if (!weather) {
    return null
  }

  return (
    <div>
      <WeatherIndicator
        temperature={weather.temperature}
        weatherCode={weather.weatherCode}
        isDay={weather.isDay}
      />
    </div>
  )
}
