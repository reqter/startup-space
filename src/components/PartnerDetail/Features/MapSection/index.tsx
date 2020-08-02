import React from "react";
import LayoutBox from "../../LayoutBox";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import dynamic from "next/dynamic";
const MapBox = dynamic(() => import("components/Common/Map"), {
  ssr: false,
});
const Map = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );
  return partnerDetail &&
    partnerDetail.location &&
    partnerDetail.location.latitude &&
    partnerDetail.location.longitude ? (
    <LayoutBox title={getValue(data, "mapboxtitle")} height={400}>
      <MapBox
        title={getValue(partnerDetail, "name")}
        lat={partnerDetail.location.latitude}
        lng={partnerDetail.location.longitude}
      />
    </LayoutBox>
  ) : null;
};
export default Map;
