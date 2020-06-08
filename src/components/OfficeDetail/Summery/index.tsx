import React from "react";
import {
  IoIosLink,
  IoIosPin,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMdCheckmark,
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

const Summery = () => {
  return (
    <SummeryWrapper>
      <Content>
        <Left>
          <Name>فضای اشتراکی پارادایس هاب</Name>
          <Location>
            <IoIosPin color={theme`colors.blue.500`} />
            ایران، تهران، شمال تهران
          </Location>
        </Left>
        <Right>
          <Actions>
            <BoxInfo
              style={{
                background: theme`colors.blue.500`,
                color: theme`colors.white`,
              }}
            >
              <IoMdCheckmark size="1.8rem" />
              تایید شده
            </BoxInfo>
            <BoxInfo>
              <IoLogoFacebook color={theme`colors.blue.500`} size="1.8rem" />
            </BoxInfo>
            <BoxInfo>
              <IoLogoLinkedin color={theme`colors.blue.500`} size="1.8rem" />
            </BoxInfo>
            <BoxInfo>
              <IoLogoInstagram color={theme`colors.blue.500`} size="1.8rem" />
            </BoxInfo>
          </Actions>
          <Website href="https://paradisehub.ir/about/" target="_blank">
            <Link>https://paradisehub.ir/about</Link>
          </Website>
        </Right>
      </Content>
    </SummeryWrapper>
  );
};
export default Summery;
