import React from "react";
import LayoutBox from "../LayoutBox";
import { AddressContainer, Row, Key, Value, Button } from "./styles";
const Description = () => {
  return (
    <LayoutBox
      title="آدرس"
      actions={() => {
        return <Button>نمایش بر روی نقشه</Button>;
      }}
    >
      <AddressContainer>
        <Row>
          <Key>آدرس:</Key>
          <Value>ایران، تهران، سعادت آباد</Value>
        </Row>
        <Row>
          <Key>کد پستی</Key>
          <Value>60615</Value>
        </Row>
        <Row>
          <Key>منطقه</Key>
          <Value>شمال تهران</Value>
        </Row>
        <Row>
          <Key>شهر</Key>
          <Value>تهران</Value>
        </Row>
        <Row>
          <Key>استان</Key>
          <Value>تهران</Value>
        </Row>
        <Row>
          <Key>کشور</Key>
          <Value>ایران</Value>
        </Row>
      </AddressContainer>
    </LayoutBox>
  );
};
export default Description;
