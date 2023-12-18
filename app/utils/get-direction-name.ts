export const getDirectionName = (degrees: number) => {
  // direction is changed in every 22.5 degrees
  const val = Math.round(degrees / 22.5);
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[(val % directions.length)];
}
