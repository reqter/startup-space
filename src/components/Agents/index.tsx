import React from "react";
import { Button } from "./styles";
import Section from "../Common/Section";
import AgentsList from "./AgentsList";

const Agents = ({}) => {
  return (
    <Section
      bgColor={theme`colors.white`}
      title="Team"
      header="Our Best Agents"
    >
      <AgentsList />
      <Button>All agents</Button>
    </Section>
  );
};
export default Agents;
