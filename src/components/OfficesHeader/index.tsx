import React from "react";
import { Wrapper, Content, Title } from "./styles";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
const SpacesHeader = (): JSX.Element => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <Wrapper
      bgImage={
        "https://i.pinimg.com/736x/fe/45/da/fe45daef11dd032c0ecbe7fdfee97057.jpg"
      }
    >
      <Content>
        <Title>Offices Category Filter List</Title>
      </Content>
    </Wrapper>
  );
};

export default SpacesHeader;
