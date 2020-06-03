import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Button } from "./styles";
import Section from "../Common/Section";
import CityList from "./CityList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import useGlobalApi from "../../hooks/useGlobalApi";

const Cities = ({}) => {
  const { getCities } = useGlobalApi();
  const { landingData, citiesData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  function handleChange(isVisible: boolean) {
    if (isVisible) if (!citiesData) getCities(4);
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
      <Section
        bgImage={data.areabackground}
        title={data.areaheading}
        header={data.areatitle}
      >
        <CityList />
        <Button>{data.areaactiontext}</Button>
      </Section>
    </VisibilitySensor>
  );
};
export default Cities;
