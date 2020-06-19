import React from "react";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { IoIosPin } from "react-icons/io";
import {
  CardWrapper,
  ImageBox,
  Image,
  Address,
  Price,
  Name,
  AmenitiesBox,
  AmenitName,
} from "./styles";
const SpacesItem = ({ data }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const bg = getValue(data, "images");
  const img = bg ? includeImageBaseUrl(bg[0]) : "";
  return (
    <CardWrapper
      target="_blank"
      rel="noopener noreferrer"
      href={`/offices/${data._id}`}
    >
      <ImageBox>
        <Image src={""} alt="" />
        <Address>
          <IoIosPin />
          {getValue(data, "regionid.fields.name")},{" "}
          {getValue(data, "city.fields.name")}
        </Address>
      </ImageBox>
      <Name>{data && data.name}</Name>
      <AmenitiesBox>
        {data.amenities && data.amenities.length
          ? data.amenities.splice(0, 3).map((item, index) => (
              <AmenitName key={index} title={getValue(item, "fields.name")}>
                {getValue(item, "fields.name")}
              </AmenitName>
            ))
          : null}
      </AmenitiesBox>
    </CardWrapper>
  );
};
export default SpacesItem;
