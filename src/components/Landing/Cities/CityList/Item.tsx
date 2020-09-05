import React from "react";
import useGlobalApi from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
  const { currentLanguage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { _getCityDetailPageData, _getCityDetailData } = useGlobalApi();
  const getImage = () => {
    const bg = getValue(data, "thumbnail");
    return bg ? includeImageBaseUrl(bg[0], "image", 500, 400) : "";
  };

  function handleClick() {
    _getCityDetailPageData();
    _getCityDetailData(data?._id);
  }

  return (
    <CardWrapper
      bgUrl={getImage()}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      href={`${currentLanguage}/cities/${data?._id}`}
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
