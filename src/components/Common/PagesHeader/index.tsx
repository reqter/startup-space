import React from "react";
import { Wrapper, Content, Title } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const PagesHeader = ({ image, fallbackImage, title }): JSX.Element => {
  return (
    <Wrapper bgImage={image} fallbackImage={fallbackImage}>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
};

export default PagesHeader;
