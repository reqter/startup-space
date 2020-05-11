import React from "react";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
import { CardWrapper, Top, Bottom, Name, Role } from "./styles";
const AgentCard = ({ data }) => {
  const { dir } = useGlobalState();
  return (
    <CardWrapper bgUrl={data.image}>
      <Top dir={dir}> Listings</Top>
      <Bottom>
        <Name>Johnny</Name>
        <Role>Space Broker</Role>
      </Bottom>
    </CardWrapper>
  );
};
export default AgentCard;
