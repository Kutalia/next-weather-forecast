import { WeatherTypes } from './models'

export const weatherCodes: {
  [key: string]: {
    description: string,
    type: WeatherTypes,
    icons: {
      day: string,
      night: string,
    },
  }
} = {
  '0': {
    description: 'clear sky',
    type: WeatherTypes.CLEAR,
    icons: {
      day: '/clear_weather_day.svg',
      night: '/clear_weather_night.svg',
    },
  },
  '1': {
    description: 'mainly clear',
    type: WeatherTypes.CLOUDY,
    icons: {
      day: '/mainly_clear_weather_day.svg',
      night: '/mainly_clear_weather_night.svg',
    },
  },
  '2': {
    description: 'partly cloudy',
    type: WeatherTypes.CLOUDY,
    icons: {
      day: '/cloudy.svg',
      night: '/cloudy.svg',
    },
  },
  '3': {
    description: 'overcast',
    type: WeatherTypes.CLOUDY,
    icons: {
      day: '/cloudy.svg',
      night: '/cloudy.svg',
    },
  },
  '4': {
    description: 'fog',
    type: WeatherTypes.FOG,
    icons: {
      day: '/foggy_day.svg',
      night: '/foggy_night.svg',
    },
  },
  '48': {
    description: 'depositing rime fog',
    type: WeatherTypes.FOG,
    icons: {
      day: '/rime.svg',
      night: '/rime.svg',
    },
  },
  '51': {
    description: 'light drizzle',
    type: WeatherTypes.DRIZZLE,
    icons: {
      day: '/light_drizzle_day.svg',
      night: '/light_drizzle_night.svg',
    },
  },
  '53': {
    description: 'moderate drizzle',
    type: WeatherTypes.DRIZZLE,
    icons: {
      day: '/moderate_drizzle_day.svg',
      night: '/moderate_drizzle_night.svg',
    },
  },
  '55': {
    description: 'dense drizzle',
    type: WeatherTypes.DRIZZLE,
    icons: {
      day: '/dense_drizzle_day.svg',
      night: '/dense_drizzle_night.svg',
    },
  },
  '56': {
    description: 'freezing drizzle',
    type: WeatherTypes.FREEZING_DRIZZLE,
    icons: {
      day: '/freezing_rain.svg',
      night: '/freezing_rain.svg',
    },
  },
  '57': {
    description: 'dense freezing drizzle',
    type: WeatherTypes.FREEZING_DRIZZLE,
    icons: {
      day: '/freezing_rain.svg',
      night: '/freezing_rain.svg',
    },
  },
  '61': {
    description: 'slight rain',
    type: WeatherTypes.RAIN,
    icons: {
      day: '/slight_rain.svg',
      night: '/slight_rain.svg',
    },
  },
  '63': {
    description: 'moderate rain',
    type: WeatherTypes.RAIN,
    icons: {
      day: '/moderate_rain.svg',
      night: '/moderate_rain.svg',
    },
  },
  '65': {
    description: 'heavy rain',
    type: WeatherTypes.RAIN,
    icons: {
      day: '/heavy_rain.svg',
      night: '/heavy_rain.svg',
    },
  },
  '66': {
    description: 'light freezing rain',
    type: WeatherTypes.FREEZING_RAIN,
    icons: {
      day: '/freezing_rain.svg',
      night: '/freezing_rain.svg',
    },
  },
  '67': {
    description: 'heavy freezing rain',
    type: WeatherTypes.FREEZING_RAIN,
    icons: {
      day: '/freezing_rain.svg',
      night: '/freezing_rain.svg',
    },
  },
  '71': {
    description: 'light snow fall',
    type: WeatherTypes.SNOW,
    icons: {
      day: '/light_snow_day.svg',
      night: '/light_snow_night.svg',
    },
  },
  '73': {
    description: 'moderate snow fall',
    type: WeatherTypes.SNOW,
    icons: {
      day: '/moderate_snow.svg',
      night: '/moderate_snow.svg',
    },
  },
  '75': {
    description: 'heavy snow fall',
    type: WeatherTypes.SNOW,
    icons: {
      day: '/heavy_snow.svg',
      night: '/heavy_snow.svg',
    },
  },
  '77': {
    description: 'snow grains',
    type: WeatherTypes.SNOW_GRAINS,
    icons: {
      day: '/snow_grains.svg',
      night: '/snow_grains.svg',
    },
  },
  '80': {
    description: 'slight rain shower',
    type: WeatherTypes.RAIN_SHOWER,
    icons: {
      day: '/slight_rain_shower_day.svg',
      night: '/slight_rain_shower_night.svg',
    },
  },
  '81': {
    description: 'moderate rain shower',
    type: WeatherTypes.RAIN_SHOWER,
    icons: {
      day: '/slight_rain_shower_day.svg',
      night: '/slight_rain_shower_night.svg',
    },
  },
  '82': {
    description: 'violent rain shower',
    type: WeatherTypes.RAIN_SHOWER,
    icons: {
      day: '/violent_rain_shower_day.svg',
      night: '/violent_rain_shower_night.svg',
    },
  },
  '85': {
    description: 'slight snow shower',
    type: WeatherTypes.SNOW_SHOWER,
    icons: {
      day: '/slight_snow_shower_day.svg',
      night: '/slight_snow_shower_night.svg',
    },
  },
  '86': {
    description: 'heavy snow shower',
    type: WeatherTypes.SNOW_SHOWER,
    icons: {
      day: '/heavy_snow_shower_day.svg',
      night: '/heavy_snow_shower_night.svg',
    },
  },
  '95': {
    description: 'slight or moderate thunderstorm',
    type: WeatherTypes.THUNDERSTORM,
    icons: {
      day: '/thunderstorm_day.svg',
      night: '/thunderstorm_night.svg',
    },
  },
  '96': {
    description: 'thunderstorm with slight hail',
    type: WeatherTypes.THUNDERSTORM_HAIL,
    icons: {
      day: '/thunderstorm_hail.svg',
      night: '/thunderstorm_hail.svg',
    },
  },
  '99': {
    description: 'thunderstorm with moderate hail',
    type: WeatherTypes.THUNDERSTORM_HAIL,
    icons: {
      day: '/thunderstorm_hail.svg',
      night: '/thunderstorm_hail.svg',
    },
  },
}
