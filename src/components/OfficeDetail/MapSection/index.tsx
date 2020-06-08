import React from "react";
import LayoutBox from "../LayoutBox";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("./../../Map"), {
  ssr: false,
});
const Map = () => {
  return (
    <LayoutBox title="نقشه">
      <MapBox />
    </LayoutBox>
  );
};
export default Map;
