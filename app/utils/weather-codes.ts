export enum Weather {
  CLEAR,
  CLOUDY,
  FOG,
  DRIZZLE,
  FREEZING_DRIZZLE,
  RAIN,
  FREEZING_RAIN,
  SNOW,
  SNOW_GRAINS,
  RAIN_SHOWER,
  SNOW_SHOWER,
  THUNDERSTORM,
  THUNDERSTORM_HAIL,
}

export const weatherCodeDescriptions: {
  [key: string]: {
    desc: string,
    type: Weather
  }
} = {
  '0': {
    desc: 'clear sky',
    type: Weather.CLEAR,
  },
  '1': {
    desc: 'mainly clear',
    type: Weather.CLOUDY,
  },
  '2': {
    desc: 'partly cloudy',
    type: Weather.CLOUDY
  },
  '3': {
    desc: 'overcast',
    type: Weather.CLOUDY
  },
  '4': {
    desc: 'fog',
    type: Weather.FOG
  },
  '48': {
    desc: 'depositing rime fog',
    type: Weather.FOG
  },
  '51': {
    desc: 'light drizzle',
    type: Weather.DRIZZLE
  },
  '53': {
    desc: 'moderate drizzle',
    type: Weather.DRIZZLE
  },
  '55': {
    desc: 'dense drizzle',
    type: Weather.DRIZZLE
  },
  '56': {
    desc: 'freezing drizzle',
    type: Weather.FREEZING_DRIZZLE
  },
  '57': {
    desc: 'dense freezing drizzle',
    type: Weather.FREEZING_DRIZZLE
  },
  '61': {
    desc: 'slight rain',
    type: Weather.RAIN
  },
  '63': {
    desc: 'moderate rain',
    type: Weather.RAIN
  },
  '65': {
    desc: 'heavy rain',
    type: Weather.RAIN
  },
  '66': {
    desc: 'light freezing rain',
    type: Weather.FREEZING_RAIN
  },
  '67': {
    desc: 'heavy freezing rain',
    type: Weather.FREEZING_RAIN
  },
  '71': {
    desc: 'light snow fall',
    type: Weather.SNOW
  },
  '73': {
    desc: 'moderate snow fall',
    type: Weather.SNOW
  },
  '75': {
    desc: 'heavy snow fall',
    type: Weather.SNOW
  },
  '77': {
    desc: 'snow grains',
    type: Weather.SNOW_GRAINS
  },
  '80': {
    desc: 'slight rain shower',
    type: Weather.RAIN_SHOWER
  },
  '81': {
    desc: 'moderate rain shower',
    type: Weather.RAIN_SHOWER
  },
  '82': {
    desc: 'violent rain shower',
    type: Weather.RAIN_SHOWER
  },
  '85': {
    desc: 'slight snow shower',
    type: Weather.SNOW_SHOWER
  },
  '86': {
    desc: 'heavy snow shower',
    type: Weather.SNOW_SHOWER
  },
  '95': {
    desc: 'slight or moderate thunderstorm',
    type: Weather.THUNDERSTORM
  },
  '96': {
    desc: 'thunderstorm with slight hail',
    type: Weather.THUNDERSTORM_HAIL
  },
  '99': {
    desc: 'thunderstorm with moderate hail',
    type: Weather.THUNDERSTORM_HAIL
  },
}
