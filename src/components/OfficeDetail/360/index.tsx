import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import LayoutBox from "../LayoutBox";
// import { Pannellum, PannellumVideo } from "pannellum-react";
const View360 = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return <LayoutBox title={data.view360boxtitle}></LayoutBox>;
};
export default View360;
// <Pannellum
//   width="100%"
//   height="500px"
//   image={"https://i.ytimg.com/vi/qRJrp1ABbhw/maxresdefault.jpg"}
//   pitch={10}
//   yaw={180}
//   hfov={110}
//   autoLoad
//   onLoad={() => {
//     console.log("panorama loaded");
//   }}
// >
//   <Pannellum.Hotspot
//     type="info"
//     pitch={11}
//     yaw={-167}
//     text="Info Hotspot Text 3"
//     URL="https://github.com/farminf/pannellum-react"
//   />
//
//   <Pannellum.Hotspot
//     type="info"
//     pitch={31}
//     yaw={-107}
//     text="Info Hotspot Text 4"
//     URL="https://github.com/farminf/pannellum-react"
//   />
// </Pannellum>
