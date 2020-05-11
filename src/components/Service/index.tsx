import React from "react";
import { withTranslation } from "../../../config/Next18Wrapper";
import Divider from "../Common/Divider";
import {
  Wrapper,
  Content,
  Left,
  Image,
  Right,
  Title,
  Header,
  Description,
  Button,
} from "./styles";
const Service = ({ t }) => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <Image src="/images/service-icon.jpg" />
        </Left>
        <Right>
          <Title>{t("SERVICE_TITLE")}</Title>
          <Header>{t("SERVICE_HEADER")}</Header>
          <Divider />
          <Description>{t("SERVICE_DESCRIPTION")}</Description>
          <Button>{t("SERVICE_BUTTON")}</Button>
        </Right>
      </Content>
    </Wrapper>
  );
};
export default withTranslation("service")(Service);
