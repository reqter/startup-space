import React from "react";
import Card from "./Item";
import { Container } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const AgentsList = () => {
  const { agentsData, landingData } = useGlobalState();
  return (
    <Container>
      {agentsData &&
        agentsData
          .slice(0, 3)
          .map((item, index) => (
            <Card
              key={index}
              data={item}
              listings={landingData && landingData[0].agentslisting}
            />
          ))}
    </Container>
  );
};
export default AgentsList;
