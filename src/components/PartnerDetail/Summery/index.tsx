import React from "react";
import {
  IoIosPin,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMdCheckmark,
  IoIosGlobe,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import {
  SummeryWrapper,
  Content,
  Left,
  PartnerInfo,
  LogoWrapper,
  Right,
  Name,
  Location,
  Actions,
  BoxInfo,
  Website,
  Link,
  Logo,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Summery = () => {
  const { partnerDetail = {}, partnerDetailPage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <SummeryWrapper>
      <Content>
        <Left>
          {partnerDetail.logo && partnerDetail.logo.length ? (
            <LogoWrapper>
              <Logo src={includeImageBaseUrl(partnerDetail.logo[0])} alt="" />
            </LogoWrapper>
          ) : null}
          <PartnerInfo>
            <Name>{partnerDetail.name}</Name>
            <Location>
              <IoIosPin color={theme`colors.blue.500`} />
              {partnerDetail.address}
            </Location>
          </PartnerInfo>
        </Left>
        <Right>
          <Actions>
            {partnerDetail.verified && (
              <BoxInfo
                style={{
                  background: theme`colors.blue.500`,
                  color: theme`colors.white`,
                }}
              >
                <IoMdCheckmark size="1.8rem" />
                {data.isverifedtext}
              </BoxInfo>
            )}
            {partnerDetail.homepage && partnerDetail.homepage.length ? (
              <BoxInfo
                href={partnerDetail.homepage}
                target="_blank"
                title={partnerDetail.homepage}
              >
                <IoIosGlobe color={theme`colors.blue.500`} size="1.8rem" />
              </BoxInfo>
            ) : null}
            {partnerDetail.facebook ? (
              <BoxInfo href={partnerDetail.facebook} target="_blank">
                <IoLogoFacebook color={theme`colors.blue.500`} size="1.8rem" />
              </BoxInfo>
            ) : null}
            {partnerDetail.linkedin ? (
              <BoxInfo href={partnerDetail.linkedin} target="_blank">
                <IoLogoLinkedin color={theme`colors.blue.500`} size="1.8rem" />
              </BoxInfo>
            ) : null}
            {partnerDetail.instagram ? (
              <BoxInfo href={partnerDetail.instagram} target="_blank">
                <IoLogoInstagram color={theme`colors.blue.500`} size="1.8rem" />
              </BoxInfo>
            ) : null}
          </Actions>
        </Right>
      </Content>
    </SummeryWrapper>
  );
};
export default Summery;
