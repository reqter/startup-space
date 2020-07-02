import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { CardWrapper, Top, Bottom, Name, Role } from "./styles";
const AgentCard = ({ data, listings }) => {
  const { dir } = useGlobalState();
  return (
    <CardWrapper bgUrl={data.image}>
      <Top dir={dir}> {listings}</Top>
      <Bottom>
        <Name>{data.name}</Name>
        <Role>{data.field}</Role>
      </Bottom>
    </CardWrapper>
  );
};
export default AgentCard;
