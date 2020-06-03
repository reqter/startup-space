import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Button } from "./styles";
import Section from "../Common/Section";
import AgentsList from "./AgentsList";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import useGlobalApi from "../../hooks/useGlobalApi";

const Agents = ({}) => {
  const { getAgents } = useGlobalApi();
  const { landingData, agentsData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  function handleChange(isVisible: boolean) {
    if (isVisible) if (!agentsData) getAgents(3);
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -100 }}
    >
      <Section
        bgColor={theme`colors.white`}
        title={data.agentsheading}
        header={data.agentstitle}
      >
        <AgentsList />
        <Button>{data.agentsactiontext}</Button>
      </Section>
    </VisibilitySensor>
  );
};
export default Agents;
