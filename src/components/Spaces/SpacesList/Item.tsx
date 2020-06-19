import React from "react";
import { CardWrapper, Image, Content, Name, Location } from "./styles";
const SpacesItem = ({ data, colSpan, hasMargin }) => {
  return (
    <CardWrapper
      colSpan={colSpan}
      hasMargin={hasMargin}
      target="_blank"
      rel="noopener noreferrer"
      href={`/offices/${data?._id}`}
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
