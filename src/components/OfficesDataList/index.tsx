import React from "react";
import Section from "../Common/Section";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import FilterBox from "./FilterBox";
import List from "./List";
import { Content } from "./styles";

const Spaces = () => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Section bgColor={theme`colors.gray.200`}>
      <Content>
        <List />
        <FilterBox />
      </Content>
    </Section>
  );
};
export default Spaces;
