import React from "react";
import Description from "../Description";
import Detail from "../Detail";
import Amenities from "../Amenities";
import Products from "../Products";
import MapSection from "./../MapSection";
import Address from "./../َAddress";
import View360 from "./../360";
import VirtualTour from "./../VirtualTour";
import FloorPlan from "./../FloorPlan";
import Agent from "./../Agent";
import Reply from "./../Reply";
import MoreInfo from "./../MoreInfo";
import { FeaturesWrapper } from "./styles";

const Features = () => {
  return (
    <FeaturesWrapper>
      <Description />
      <Amenities />
      <MoreInfo />
      <Products />
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
