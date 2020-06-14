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
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const Features = () => {
  const { dispatch } = useGlobalDispatch();
  const { partnerDetailStickySideBar } = useGlobalState();
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;

      if (containerTop <= 100) {
        dispatch({
          type: "TOGGLE_PARTNER_DETAIL_STICKY_SIDE_BAR",
          payload: true,
        });
      } else {
        dispatch({
          type: "TOGGLE_PARTNER_DETAIL_STICKY_SIDE_BAR",
          payload: false,
        });
      }
      // else toggleSideSticky(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <FeaturesWrapper
      isSideSticky={partnerDetailStickySideBar}
      ref={containerRef}
    >
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
