import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
const MapBox = () => {
  const [state, setState] = React.useState({
    lat: 35.809717,
    lng: 51.491629,
    zoom: 13,
  });
  return (
    <Map center={[state.lat, state.lng]} zoom={state.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[state.lat, state.lng]}>
        <Popup>
          فضای کار اشتراکی پارادایس هاب. <br /> همه روزه صبح تا 10 شب
        </Popup>
      </Marker>
    </Map>
  );
};
export default MapBox;
