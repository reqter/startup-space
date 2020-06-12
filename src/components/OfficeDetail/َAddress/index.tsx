import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import LayoutBox from "../LayoutBox";
import { AddressContainer, Row, Key, Value, Button } from "./styles";
const Address = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (
    <LayoutBox
      title={data.addressboxtitle}
      actions={() => {
        return <Button>{data.addressboxmaptext}</Button>;
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
export default Address;
