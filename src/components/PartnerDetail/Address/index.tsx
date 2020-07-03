import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import LayoutBox from "../LayoutBox";
import { AddressContainer, Row, Key, Value, Button } from "./styles";
const Address = () => {
  const { getValue } = useObjectPropsValue();
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  const addressTitle = getValue(data, "addressboxaddresstitle");
  const postalCodeTitle = getValue(data, "addressboxpostcodetitle");
  const districtTitle = getValue(data, "addressboxdistricttitle");
  const cityTitle = getValue(data, "addressboxcitytitle");
  const countryTitle = getValue(data, "addressboxcountrytitle");
  return (
    <LayoutBox
      title={data.addressboxtitle}
      actions={() => {
        return <Button>{data.addressboxmaptext}</Button>;
      }}
    >
      <AddressContainer>
        <Row>
          <Key>{addressTitle}:</Key>
          <Value>{getValue(partnerDetail, "address")}</Value>
        </Row>
        <Row>
          <Key>{postalCodeTitle}:</Key>
          <Value>{getValue(partnerDetail, "postalcode")}</Value>
        </Row>
        <Row>
          <Key>{districtTitle}:</Key>
          <Value>{getValue(partnerDetail, "regionid.fields.name")}</Value>
        </Row>
        <Row>
          <Key>{cityTitle}:</Key>
          <Value>{getValue(partnerDetail, "city.fields.name")}</Value>
        </Row>
        <Row>
          <Key>{countryTitle}:</Key>
          <Value>{getValue(partnerDetail, "country.fields.name")}</Value>
        </Row>
      </AddressContainer>
    </LayoutBox>
  );
};
export default Address;
