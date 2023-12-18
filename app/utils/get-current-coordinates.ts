export const getCurrentCoordinates = () => {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    const success = (pos: GeolocationPosition) => {
      resolve(pos.coords)
    }

    const error = () => {
      reject('> Unable to retrieve your location')
    }

    if (!navigator.geolocation) {
      reject('> Geolocation is not supported by your browser')
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  })
}
