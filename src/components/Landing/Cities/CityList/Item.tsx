import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const getImage = () => {
    const bg = getValue(data, "thumbnail");
    return bg ? includeImageBaseUrl(bg[0], "image", 500, 400) : "";
  };
  return (
    <CardWrapper
      bgUrl={getImage()}
      rel="noopener noreferrer"
      href={`/${currentLanguage}/offices?city=${data._id}`}
    >
      <Content>
        <Plus />
        <Location>{getValue(data, "name")}</Location>
      </Content>
    </CardWrapper>
  );
};
export default CityCard;
// <Count dir={dir}>{data.count || "2 places"}</Count>
