import React from "react";
import Divider from "../Common/Divider";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
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
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  return (
    <Wrapper>
      <Content>
        <Left>
          <Image src={data.servicemedia} />
        </Left>
        <Right>
          <Title>{data.serviceheading}</Title>
          <Header>{data.servicetitle}</Header>
          <Divider />
          <Description>{data.servicedescription}</Description>
          <Button>{data.serviceactiontext}</Button>
        </Right>
      </Content>
    </Wrapper>
  );
};
export default Service;
