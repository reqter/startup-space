import React from "react";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import LayoutBox from "../LayoutBox";
import { DetailContainer, Row, Key, Value } from "./styles";
const Detail = () => {
  const { getValue } = useObjectPropsValue();
  const {
    partnerDetail,
    partnerDetailPage,
    currentLanguage,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  const detail =
    partnerDetail && partnerDetail.details
      ? JSON.parse(partnerDetail.details)
      : [];
  return detail && detail.length ? (
    <LayoutBox title={data.detailboxtitle}>
      <DetailContainer>
        {detail.map((item, index) => (
          <Row key={index}>
            <Key>{item.header[currentLanguage]}</Key>
            <Value>{item.body}</Value>
          </Row>
        ))}
      </DetailContainer>
    </LayoutBox>
  ) : null;
};
export default Detail;
