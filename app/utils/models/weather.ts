export interface Weather {
  temperature: number,
  weatherCode: number,
  apparentTemperature: number,
  humidity: number,
  windSpeed: number,
  windDirection: number,
  isDay: number,
  elevation: number,
  visibility: number,
  locationInfo: string,
}

export enum WeatherTypes {
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
