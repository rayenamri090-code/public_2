import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

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

const customIcon = new L.Icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const SponsorsMap = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4  rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Our Sponsors Around the World
      </h2>

      <div className="w-full md:w-3/4 lg:w-2/3 h-[500px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[36.8065, 10.1815]}
          zoom={13}
          className="w-full h-full"
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          {sponsors.map((sponsor) => (
            <Marker
              key={sponsor.id}
              position={[sponsor.lat, sponsor.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelected(sponsor),
              }}
            >
              {selected?.id === sponsor.id && (
                <Popup>
                  <div className="p-1">
                    <h3 className="font-semibold text-gray-800">
                      {sponsor.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {sponsor.description}
                    </p>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default SponsorsMap;
