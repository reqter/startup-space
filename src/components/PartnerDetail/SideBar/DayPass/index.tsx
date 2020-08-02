import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { Title, Divider, Actions, Button } from "./styles";
import LayoutBox from "../../LayoutBox";

const DayPass = () => {
  const { partnerDetailPage } = useGlobalState();
  const data = partnerDetailPage ? partnerDetailPage[0] : {};
  return (
    <LayoutBox width={370}>
      <Title>{data.daypassboxtitle}</Title>
      <Divider />
      <Actions>
        <Button>{data.daypassboxaction1title}</Button>
      </Actions>
    </LayoutBox>
  );
};
export default DayPass;
