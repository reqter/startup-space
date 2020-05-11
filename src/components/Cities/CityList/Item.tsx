import React from "react";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
  const { dir } = useGlobalState();
  return (
    <CardWrapper bgUrl={data.image}>
      <Content>
        <Plus />
        <Location>{data.displayName}</Location>
        <Count dir={dir}>{data.count}</Count>
      </Content>
    </CardWrapper>
  );
};
export default CityCard;
