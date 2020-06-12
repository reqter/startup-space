import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
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
const Agent = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox title={data.agentboxtitle}>
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
export default Agent;
