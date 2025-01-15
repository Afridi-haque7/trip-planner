'use client';
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function LocationInput() {
    const [place, setPlace] = useState(null);
  return (
    <div>
        <GooglePlacesAutocomplete 
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
        selectProps={{
            place,
            onChange: (v) => {setPlace(v); console.log(v)},
        }}
        debounce={200}
         />
    </div>
  )
}

export default LocationInput;
