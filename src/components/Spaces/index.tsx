import React from "react";
import { Link } from "../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../Common/Section";
import SpacesList from "./SpacesList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import useGlobalApi from "../../hooks/useGlobalApi";
import VisibilitySensor from "react-visibility-sensor";

const Spaces = () => {
  const { getOffices } = useGlobalApi();
  const { landingData, officesData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  function handleChange(isVisible: boolean) {
    if (isVisible) if (!officesData) getOffices(4);
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
      {(isVisible) =>
        isVisible && (
          <Section
            bgColor={theme`colors.gray.100`}
            title={data.officesheading}
            header={data.officestitle}
          >
            <SpacesList />
            <Button>
              <Link href={`/offices`}>{data.officesactiontext}</Link>
            </Button>
          </Section>
        )
      }
    </VisibilitySensor>
  );
};
export default Spaces;
