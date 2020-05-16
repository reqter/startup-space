import React from "react";
import useGlobalState from "../../../hooks/useGlobal/useGlobalState";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
  const { dir } = useGlobalState();
  return (
    <CardWrapper bgUrl={data.thumbnail[0]}>
      <Content>
        <Plus />
        <Location>{data.name}</Location>
      </Content>
    </CardWrapper>
  );
};
export default CityCard;
// <Count dir={dir}>{data.count || "2 places"}</Count>
