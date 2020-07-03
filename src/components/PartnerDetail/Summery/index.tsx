import React from "react";
import {
  IoIosPin,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMdCheckmark,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import {
  SummeryWrapper,
  Content,
  Left,
  Right,
  Name,
  Location,
  Actions,
  BoxInfo,
  Website,
  Link,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const Summery = () => {
  const { partnerDetail = {}, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  console.log(partnerDetail);
  return (
    <SummeryWrapper>
      <Content>
        <Left>
          <Name>{partnerDetail.name}</Name>
          <Location>
            <IoIosPin color={theme`colors.blue.500`} />
            {partnerDetail.address}
          </Location>
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
          {partnerDetail.homepage && partnerDetail.homepage.length ? (
            <Website href={partnerDetail.homepage} target="_blank">
              <Link>{partnerDetail.homepage}</Link>
            </Website>
          ) : null}
        </Right>
      </Content>
    </SummeryWrapper>
  );
};
export default Summery;
