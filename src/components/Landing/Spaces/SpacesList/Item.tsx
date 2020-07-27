import React from "react";
import { CardWrapper, Image, Content, Name, Location } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const SpacesItem = ({ data, colSpan, hasMargin }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const bg = getValue(data, "images");
  const img = bg ? includeImageBaseUrl(bg[0], "image", 500, 300) : "";
  return (
    <CardWrapper
      colSpan={colSpan}
      hasMargin={hasMargin}
      target="_blank"
      rel="noopener noreferrer"
      href={`${currentLanguage}/offices/${data ? data.partnerkey : ""}`}
    >
      <Image bgImage={img} />
      <Content>
        <Name>{getValue(data, "name")}</Name>
        <Location>{getValue(data, "fullname")}</Location>
      </Content>
    </CardWrapper>
  );
};
export default SpacesItem;
