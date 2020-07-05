import useGlobalState from "hooks/useGlobal/useGlobalState";
import { MapContainer } from "./styles";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("components/Common/Map"), {
  ssr: false,
});
const Map = () => {
  const { contactUsPageData } = useGlobalState();
  return (
    <MapContainer>
      <MapBox
        title={""}
        lat={contactUsPageData.location.latitude}
        lng={contactUsPageData.location.longitude}
      />
    </MapContainer>
  );
};
export default Map;
