import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../../Common/Section";
import SpacesList from "./SpacesList";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Spaces = () => {
  const { getPopularOffices } = useGlobalApi();
  const { landingData, landingOfficesData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  React.useEffect(() => {
    if (!landingOfficesData) getPopularOffices(0, 4, (result) => {});
  }, []);

  return data.isofficesenabled ? (
    <Section
      bgColor={theme`colors.gray.100`}
      title={data.officesheading}
      header={data.officestitle}
    >
      <SpacesList officesData={landingOfficesData} />
      <Button>
        <Link href={`/offices`}>
          {data && data.officesactiontext ? data.officesactiontext : ""}
        </Link>
      </Button>
    </Section>
  ) : null;
};
export default Spaces;
