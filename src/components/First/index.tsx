import React from "react";
import FilterBox from "./../FilterBox";
import { Wrapper, Content, Left, Right, User } from "./styles";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
const FirstBox = (): JSX.Element => {
  const { landingData } = useGlobalState();
  const data = landingData ? landingData[0] : {};
  return (
    <Wrapper bgImage={data.mainbackimage}>
      <Content>
        <Left>
          <FilterBox />
        </Left>
        <Right>
          <User src={data.homebrandimage} />
        </Right>
      </Content>
    </Wrapper>
  );
};

export default FirstBox;
