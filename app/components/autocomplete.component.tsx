import { ChangeEventHandler, useEffect } from 'react'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { Loader } from '@googlemaps/js-api-loader'
import useOnclickOutside from 'react-cool-onclickoutside'

import { useWeather } from '../hooks'
import { getAddressString, getCurrentCoordinates } from '../utils'

export const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
    init,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  })

  const { loadWeather } = useWeather()

  const ref = useOnclickOutside(() => {
    clearSuggestions()
  })

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  // iife for beautiful async/await
  // load evil global gMaps library once and fetch (unrelated) weather for current position here to avoid gMaps dependency
  useEffect(() => {
    (
      async () => {
        try {
          const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
            version: "weekly",
            libraries: ["places"],
          })

          await loader.importLibrary('places')
          init()

          const coordinates = await getCurrentCoordinates()

          // waiting blocks execution but initializing weather with locationInfo avoids possible rerenders
          const locationResults = await getGeocode(
            {
              location: {
                lat: coordinates.latitude,
                lng: coordinates.longitude,
              }
            }
          )

          const locationInfo = getAddressString(locationResults[0].address_components)

          loadWeather(coordinates.latitude, coordinates.longitude, locationInfo)
        }
        catch (err) {
          console.error(err)
        }
      })()
  }, [loadWeather, init])

  const handleSelect =
    ({ description }: { description: string }) =>
      () => {
        setValue(description, false)
        clearSuggestions()

        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0])
          loadWeather(lat, lng)
        })
      }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div ref={ref}>
      <input
        className="text-black"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}
