const getSortedAddress = (address_components: google.maps.GeocoderAddressComponent[]) => {
  const sortedComponentTypes = {
    home: ['street_number'],
    postal_code: ['postal_code'],
    street: ['street_address', 'route'],
    region: [
      'administrative_area_level_1',
      'administrative_area_level_2',
      'administrative_area_level_3',
      'administrative_area_level_4',
      'administrative_area_level_5'
    ],
    city: [
      'locality',
      'sublocality',
      'sublocality_level_1',
      'sublocality_level_2',
      'sublocality_level_3',
      'sublocality_level_4'
    ],
    country: ['country']
  }

  const address = {
    home: '',
    postal_code: '',
    street: '',
    region: '',
    city: '',
    country: ''
  }

  address_components.forEach(component => {
    let placeType: keyof typeof sortedComponentTypes

    for (placeType in sortedComponentTypes) {
      if (sortedComponentTypes[placeType].indexOf(component.types[0]) !== -1) {
        address[placeType] = component.long_name
      }
    }
  })

  return address
}

export const getAddressString = (address_components: google.maps.GeocoderAddressComponent[]) => {
  const sortedAddressObj = getSortedAddress(address_components)
  
  return Object.values(sortedAddressObj).filter((val) => val !==  '').slice(-2).join(', ')
}