import React from "react";
import { Wrapper, Content, PhoneNumber, Email } from "./styles";

const HeaderInfo = () => {
  return (
    <Wrapper>
      <Content>
        <PhoneNumber>(123) 456-7890</PhoneNumber>
        <Email>info@example.com</Email>
      </Content>
    </Wrapper>
  );
};
export default HeaderInfo;
