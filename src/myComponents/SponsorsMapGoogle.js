import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 36.8065, lng: 10.1815 }; // Tunis example

const sponsors = [
  {
    id: 1,
    name: "Sponsor Alpha",
    description: "Main technology partner from SF.",
    lat: 36.8065,
    lng: 10.1815,
  },
  {
    id: 2,
    name: "Sponsor Beta",
    description: "Local sponsor focused on education.",
    lat: 36.8188,
    lng: 10.1659,
  },
  {
    id: 3,
    name: "Sponsor Gamma",
    description: "Global startup accelerator.",
    lat: 36.8028,
    lng: 10.1797,
  },
];

const SponsorsMap = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-gray-50 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Our Sponsors Around the World
      </h2>

      <div className="w-full md:w-3/4 lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-lg">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {sponsors.map((sponsor) => (
              <Marker
                key={sponsor.id}
                position={{ lat: sponsor.lat, lng: sponsor.lng }}
                onClick={() => setSelected(sponsor)}
              />
            ))}

            {selected && (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div className="p-2">
                  <h3 className="font-semibold text-gray-800">
                    {selected.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{selected.description}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default SponsorsMap;
