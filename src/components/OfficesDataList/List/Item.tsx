import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
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
    <CardWrapper>
      <ImageBox>
        <Image
          src="https://library.kissclipart.com/20181001/bbq/kissclipart-workdar-coworking-space-clipart-coworking-a7a0512b3741f118.png"
          alt=""
        />
        <Address>
          <IoIosPin />
          منطفه 17، گلپایگان
        </Address>
        <Price>150,000 تومان</Price>
      </ImageBox>
      <Name>
        <Link href="/offices/12">لوکس ترین فضای کار اشتراکی</Link>
      </Name>
      <AmenitiesBox>
        <AmenitName>پارکینگ</AmenitName>
        <AmenitName>اتاق بازی</AmenitName>
        <AmenitName>اینترنت</AmenitName>
      </AmenitiesBox>
    </CardWrapper>
  );
};
export default SpacesItem;
