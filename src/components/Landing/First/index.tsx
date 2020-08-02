import React from "react";
import FilterBox from "./../FilterBox";
import { Wrapper, Content, Title, Description } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
const FirstBox = (): JSX.Element => {
  const { landingData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = landingData ? landingData[0] : {};
  return (
    <Wrapper bgImage={data.mainbackimage}>
      <Content>
        <Title>{getValue(data, "headertitle")}</Title>
        <Description>{getValue(data, "headerdescription")}</Description>
        <FilterBox />
      </Content>
    </Wrapper>
  );
};

export default FirstBox;
