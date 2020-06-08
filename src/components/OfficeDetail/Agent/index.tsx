import React from "react";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoMdPhonePortrait,
  IoIosPin,
  IoLogoSkype,
  IoMdMailOpen,
  IoIosLink,
} from "react-icons/io";
import LayoutBox from "../LayoutBox";
import {
  AgentContainer,
  ImageBox,
  ImageInfo,
  Detail,
  Name,
  DetailRow,
  DetailValue,
} from "./styles";
const FloorPlan = () => {
  return (
    <LayoutBox title="اطلاعات مشاور">
      <AgentContainer>
        <ImageBox src="https://assets.reqter.com/asset/download/file-1589438010203.jpeg">
          <ImageInfo>
            <IoLogoTwitter />
            <IoLogoFacebook />
            <IoLogoLinkedin />
          </ImageInfo>
        </ImageBox>
        <Detail>
          <Name>سعید پادیاب</Name>
          <DetailRow>
            <IoMdPhonePortrait />
            <DetailValue>09213378941</DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosPin />
            <DetailValue>تهران - خیابان ولیعصر</DetailValue>
          </DetailRow>
          <DetailRow>
            <IoLogoSkype />
            <DetailValue>mercy.skyper</DetailValue>
          </DetailRow>
          <DetailRow>
            <IoMdMailOpen />
            <DetailValue>mercy@gmail.com</DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosLink />
            <DetailValue>http://tafresh-theme.com/zoacres</DetailValue>
          </DetailRow>
        </Detail>
      </AgentContainer>
    </LayoutBox>
  );
};
export default FloorPlan;
