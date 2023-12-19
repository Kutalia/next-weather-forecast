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
  useEffect(() => {
    (
      async () => {
        try {
          // load evil global gMaps library once
          const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
            version: "weekly",
            libraries: ["places"],
          })

          await loader.importLibrary('places')
          init()

          // fetch weather for current position here to avoid further gMaps dependencies in other components
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
          const locationInfo = getAddressString(results[0].address_components)
          const { lat, lng } = getLatLng(results[0])
          loadWeather(lat, lng, locationInfo)
        })
      }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className="bg-white/80 backdrop-blur-sm text-black px-2 py-1 border-black border-t-[1px] border-x-[1px] first:rounded-t-lg last:rounded-b-lg"
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

  return (
    <div ref={ref} className="relative w-96">
      <input
        className="text-black bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 outline-none w-full"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {status === "OK" && <ul className="absolute z-10 border-black border-b-[1px]">{renderSuggestions()}</ul>}
    </div>
  )
}
