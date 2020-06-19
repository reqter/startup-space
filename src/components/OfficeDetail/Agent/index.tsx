import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
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
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const img = React.useMemo(() => {
    const val = getValue(partnerDetail, "agent.fields.image");
    if (val && val.length > 0) return includeImageBaseUrl(val[0]);
  }, [partnerDetail]);
  return partnerDetail.agent ? (
    <LayoutBox title={data.agentboxtitle}>
      <AgentContainer>
        <ImageBox src={img}>
          <ImageInfo>
            <IoLogoTwitter />
            <IoLogoFacebook />
            <IoLogoLinkedin />
          </ImageInfo>
        </ImageBox>
        <Detail>
          <Name>{getValue(partnerDetail, "agent.fields.name")}</Name>
          <DetailRow>
            <IoMdPhonePortrait />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.phonenumber")}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosPin />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.address")}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoLogoSkype />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.skypeid")}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoMdMailOpen />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.email")}
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <IoIosLink />
            <DetailValue>
              {getValue(partnerDetail, "agent.fields.about")}
            </DetailValue>
          </DetailRow>
        </Detail>
      </AgentContainer>
    </LayoutBox>
  ) : null;
};
export default Agent;
