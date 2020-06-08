import React from "react";
import {
  IoMdBook,
  IoIosPin,
  IoIosPrint,
  IoIosHeart,
  IoMdEye,
} from "react-icons/io";
import LayoutBox from "../LayoutBox";
import { AmenitiesContainer, Amenit, Name } from "./styles";

const Amenities = () => {
  return (
    <LayoutBox title="امکانات">
      <AmenitiesContainer>
        {[
          "اتاق بازی",
          "دسترسی به اتوبوس",
          "اینترنت پرسرعت رایگان",
          "لمکده",
          "یخچال و فریزر",
          "چای و قهوه رایگان",
          "مایکرویو",
          "دسترسی به سواری",
        ].map((item, index) => (
          <Amenit key={index}>
            <IoMdBook />
            <Name>{item}</Name>
          </Amenit>
        ))}
      </AmenitiesContainer>
    </LayoutBox>
  );
};
export default Amenities;
