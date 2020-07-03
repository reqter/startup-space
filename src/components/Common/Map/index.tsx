import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
const MapBox = ({ lat, lng, title }) => {
  const [state, setState] = React.useState({
    lat,
    lng,
    zoom: 13,
  });
  return (
    <Map center={[state.lat, state.lng]} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[state.lat, state.lng]}>
        <Popup>{title}</Popup>
      </Marker>
    </Map>
  );
};
export default MapBox;
