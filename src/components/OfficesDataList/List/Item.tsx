import React from "react";
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
  return (
    <CardWrapper
      target="_blank"
      rel="noopener noreferrer"
      href={`/offices/${data._id}`}
    >
      <ImageBox>
        <Image
          src="https://library.kissclipart.com/20181001/bbq/kissclipart-workdar-coworking-space-clipart-coworking-a7a0512b3741f118.png"
          alt=""
        />
        <Address>
          <IoIosPin />
          منطفه 17، گلپایگان
        </Address>
      </ImageBox>
      <Name>{data && data.name}</Name>
      <AmenitiesBox>
        <AmenitName>پارکینگ</AmenitName>
        <AmenitName>اتاق بازی</AmenitName>
        <AmenitName>اینترنت</AmenitName>
      </AmenitiesBox>
    </CardWrapper>
  );
};
export default SpacesItem;
