import React from "react";
import Divider from "../../Common/Divider";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
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
const Service = () => {
  const { getValue } = useObjectPropsValue();
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  return data.isservicesenabled ? (
    <Wrapper>
      <Content>
        <Left>
          <Image src={data.servicemedia} />
        </Left>
        <Right>
          <Title>{getValue(data, "serviceheading")}</Title>
          <Header>{getValue(data, "servicetitle")}</Header>
          <Divider />
          <Description>{getValue(data, "servicedescription")}</Description>
          <Button>{getValue(data, "serviceactiontext")}</Button>
        </Right>
      </Content>
    </Wrapper>
  ) : null;
};
export default Service;
