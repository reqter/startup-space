import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
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
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  return data.isservicesenabled ? (
    <Wrapper>
      <Content>
        <Left>
          <Image
            src={
              data
                ? includeImageBaseUrl(data.servicemedia[0], "image", 500, 370)
                : ""
            }
          />
        </Left>
        <Right>
          <Title>{getValue(data, "serviceheading")}</Title>
          <Header>{getValue(data, "servicetitle")}</Header>
          <Divider />
          <Description>{getValue(data, "servicedescription")}</Description>
          <Button>
            <Link href={data.servicemoredetaillink}>
              {getValue(data, "serviceactiontext")}
            </Link>
          </Button>
        </Right>
      </Content>
    </Wrapper>
  ) : null;
};
export default Service;
