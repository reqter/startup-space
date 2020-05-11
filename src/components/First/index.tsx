import React from "react";
import FilterBox from "./../FilterBox";
import { Wrapper, Content, Left, Right, User } from "./styles";
const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <FilterBox />
        </Left>
        <Right>
          <User src="/images/user.png" />
        </Right>
      </Content>
    </Wrapper>
  );
};

export default Header;
