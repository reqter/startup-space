import React from "react";
import { Link } from "../../../../../config/Next18Wrapper";
import useGlobalApi from "hooks/useGlobalApi";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { CardWrapper, Content, Plus, Location, Count } from "./styles";
const CityCard = ({ data }) => {
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
    <Link href={`/cities/${data?._id}`}>
      <CardWrapper bgUrl={getImage()} onClick={handleClick}>
        <Content>
          <Plus />
          <Location>{getValue(data, "name")}</Location>
        </Content>
      </CardWrapper>
    </Link>
  );
};
export default CityCard;
// <Count dir={dir}>{data.count || "2 places"}</Count>
