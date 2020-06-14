import React from "react";
import LayoutBox from "../LayoutBox";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("./../../Map"), {
  ssr: false,
});
const Map = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return partnerDetail &&
    partnerDetail.location &&
    partnerDetail.location.latitude &&
    partnerDetail.location.longitude ? (
    <LayoutBox title={data.mapboxtitle}>
      <MapBox
        title={partnerDetail.name}
        lat={partnerDetail.location.latitude}
        lng={partnerDetail.location.longitude}
      />
    </LayoutBox>
  ) : null;
};
export default Map;
