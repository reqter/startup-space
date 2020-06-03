import React from "react";
import { IoIosPin, IoIosPrint, IoIosHeart, IoMdEye } from "react-icons/io";
import {
  SummeryWrapper,
  Content,
  Left,
  Right,
  Name,
  Location,
  BoxInfo,
  PriceBox,
  PriceValue,
  PricePer,
} from "./styles";

const Summery = () => {
  return (
    <SummeryWrapper>
      <Content>
        <Left>
          <Name>House Rent in Hydepark</Name>
          <Location>
            <IoIosPin color={theme`colors.blue.500`} />
            Iran,Tehran
          </Location>
        </Left>
        <Right>
          <BoxInfo>
            <IoMdEye color={theme`colors.blue.500`} size="1.8rem" />
            1200
          </BoxInfo>
          <BoxInfo>
            <IoIosHeart color={theme`colors.blue.500`} size="1.8rem" />
          </BoxInfo>
          <BoxInfo>
            <IoIosPrint color={theme`colors.blue.500`} size="1.8rem" />
          </BoxInfo>
          <PriceBox>
            <PriceValue>$ 2.500</PriceValue>
            <PricePer>/per month</PricePer>
          </PriceBox>
        </Right>
      </Content>
    </SummeryWrapper>
  );
};
export default Summery;
