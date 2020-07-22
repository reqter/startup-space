import useGlobalState from "hooks/useGlobal/useGlobalState";
import { MapContainer } from "./styles";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("components/Common/Map"), {
  ssr: false,
});
const Map = () => {
  const { contactUsPageData } = useGlobalState();
  return contactUsPageData && contactUsPageData.location ? (
    <MapContainer>
      <MapBox
        title={""}
        lat={contactUsPageData ? contactUsPageData.location.latitude : ""}
        lng={contactUsPageData ? contactUsPageData.location.longitude : ""}
      />
    </MapContainer>
  ) : null;
};
export default Map;
