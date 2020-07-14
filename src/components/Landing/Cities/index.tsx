import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "../../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../../Common/Section";
import CityList from "./CityList";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Cities = ({}) => {
  const { getValue } = useObjectPropsValue();
  const { getCities } = useGlobalApi();
  const { landingData, citiesData } = useGlobalState();

  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  function handleChange(isVisible: boolean) {
    if (isVisible) if (!citiesData) getCities(4);
  }
  return data.isareaenabled ? (
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
        <Button>
          <Link href={`/offices`}>{getValue(data, "areaactiontext")}</Link>
        </Button>
      </Section>
    </VisibilitySensor>
  ) : null;
};
export default Cities;
