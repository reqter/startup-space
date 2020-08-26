import LayoutBox from "../LayoutBox";
import { MapContainer } from "../styles";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("components/Common/Map"), {
  ssr: false,
});

const CityMap = () => {
  const { cityDetailPage, cityDetail } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <LayoutBox title={getValue(cityDetailPage, "mapsectiontitle")}>
      {cityDetail && cityDetail.location ? (
        <MapContainer>
          <MapBox
            title={getValue(cityDetail, "name")}
            lat={cityDetail.location.latitude}
            lng={cityDetail.location.longitude}
          />
        </MapContainer>
      ) : null}
    </LayoutBox>
  );
};

export default CityMap;
