import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import CityList from "./CityList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const Cities = ({}) => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Section
      bgImage={data.areabackground}
      title={data.areaheading}
      header={data.areatitle}
    >
      <CityList />
      <Button>{data.areaactiontext}</Button>
    </Section>
  );
};
export default Cities;
