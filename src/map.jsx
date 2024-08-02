// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useState} from 'react'
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import Nearest from './nearest';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const locations = [
  { lat: 26.918912, lng: 80.953344, name: 'Your Current Location' },
];



const MapComponent = () => {

  const [location,setlocation]= useState([]);


  
  return (
    <MapContainer center={[26.918912, 80.953344]} zoom={13} className="map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, idx) => (
        <Marker key={idx} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
