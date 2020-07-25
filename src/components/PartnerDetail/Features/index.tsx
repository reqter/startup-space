import React from "react";
import Description from "./Description";
import Detail from "./Detail";
import Amenities from "./Amenities";
import Products from "./Products";
import MapSection from "./MapSection";
import Address from "./Address";
import View360 from "./360";
import VirtualTour from "./VirtualTour";
import FloorPlan from "./FloorPlan";
import Agent from "./Agent";
import Reply from "./Reply";
import MoreInfo from "./MoreInfo";
import { FeaturesWrapper } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const Features = () => {
  const { dispatch } = useGlobalDispatch();
  const { partnerDetailStickySideBar } = useGlobalState();
  const containerRef = React.useRef(null);
  return (
    <FeaturesWrapper ref={containerRef}>
      <Description />
      <Amenities />
      <Products />
      <MoreInfo />
      <MapSection />
      <Address />
      <Detail />
      <View360 />
      <Agent />
      <Reply />
    </FeaturesWrapper>
  );
};
export default Features;
