import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import SpacesList from "./SpacesList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const Spaces = () => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Section
      bgColor={theme`colors.gray.100`}
      title={data.officesheading}
      header={data.officestitle}
    >
      <SpacesList />
      <Button>{data.officesactiontext}</Button>
    </Section>
  );
};
export default Spaces;
