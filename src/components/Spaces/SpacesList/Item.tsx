import React from "react";
import { CardWrapper, Image, Content, Name, Location } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const SpacesItem = ({ data, colSpan, hasMargin }) => {
  const { currentLanguage } = useGlobalState();
  return (
    <CardWrapper
      colSpan={colSpan}
      hasMargin={hasMargin}
      target="_blank"
      rel="noopener noreferrer"
      href={`${currentLanguage}/offices/${data?._id}`}
    >
      <Image bgImage={data && data.images && data.images && data.images[0]} />
      <Content>
        <Name>{data && data.name}</Name>
        <Location>{data && data.fullname}</Location>
      </Content>
    </CardWrapper>
  );
};
export default SpacesItem;
