import React from "react";
import { Wrapper, Content, Title } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const HeaderFAQ = (): JSX.Element => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { partnersPageData } = useGlobalState();
  const imgProp = getValue(partnersPageData, "headerimage");
  const img =
    imgProp && imgProp.length ? includeImageBaseUrl(imgProp[0]) : null;
  return (
    <Wrapper
      bgImage={img}
      fallbackImage={
        "https://i.pinimg.com/736x/fe/45/da/fe45daef11dd032c0ecbe7fdfee97057.jpg"
      }
    >
      <Content>
        <Title>سوالات متداول</Title>
      </Content>
    </Wrapper>
  );
};

export default HeaderFAQ;
