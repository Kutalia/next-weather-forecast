import { fetchWeatherApi } from 'openmeteo'

export interface Weather {
  temperature: number,
  weatherCode: number,
  apparentTemperature: number,
  humidity: number,
  windSpeed: number,
  windDirection: number,
  elevation: number,
  visibility: number,
}

const humanizeMeteoResponse = (response: any) => {
  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

  const utcOffsetSeconds = response.utcOffsetSeconds()

  const current = response.current()!
  const minutely15 = response.minutely15()!
  const elevation = response.elevation()

  const visibilityData = {
    time: range(Number(minutely15.time()), Number(minutely15.timeEnd()), minutely15.interval()).map(
      (t) => new Date((t + utcOffsetSeconds) * 1000)
    ),
    visibility: minutely15.variables(0)!.valuesArray()!,
  }

  const weatherData: Weather = {
    temperature: current.variables(0)!.value(),
    weatherCode: current.variables(1)!.value(),
    apparentTemperature: current.variables(2)!.value(),
    humidity: current.variables(3)!.value(),
    windSpeed: current.variables(4)!.value(),
    windDirection: current.variables(5)!.value(),
    elevation,
    visibility: NaN,
  }

  let visibilityTime: Date
  let visibility: number

  for (let i = 0; i < visibilityData.time.length; i++) {
    visibilityTime = visibilityData.time[i]
    visibility = visibilityData.visibility[i]

    if ((new Date()).getTime() - visibilityTime.getTime() <= 900000) {
      weatherData.visibility = visibility
      break
    }
  }

  return weatherData
}

export const fetchWeather = async (lat: number, lng: number) => {
  const params = {
    latitude: [lat],
    longitude: [lng],
    current: 'temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m',
    minutely_15: 'visibility',
  }
  const url = 'https://api.open-meteo.com/v1/forecast'

  const responses = await fetchWeatherApi(url, params)

  const humanizedResponse = humanizeMeteoResponse(responses[0])
  console.log(humanizedResponse)
  return humanizedResponse
}
