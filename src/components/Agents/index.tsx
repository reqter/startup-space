import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import AgentsList from "./AgentsList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const Agents = ({}) => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);

  return (
    <Section
      bgColor={theme`colors.white`}
      title={data.agentsheading}
      header={data.agentstitle}
    >
      <AgentsList />
      <Button>{data.agentsactiontext}</Button>
    </Section>
  );
};
export default Agents;
