import React from "react";
import { IoMdTime, IoIosAttach } from "react-icons/io";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import LayoutBox from "../LayoutBox";
import { Title, Row, Rule } from "./styles";

const MoreInfo = () => {
  const {
    partnerDetail,
    partnerDetailPage,
    currentLanguage,
  } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  const workingHours =
    partnerDetail && partnerDetail.workinghours
      ? JSON.parse(partnerDetail.workinghours)
      : [];
  return (partnerDetail && workingHours && workingHours.length) ||
    (partnerDetail && partnerDetail.rules && partnerDetail.rules.length) ? (
    <LayoutBox title={data.thingstoknowboxtitle}>
      {workingHours && workingHours.length && (
        <>
          <Title>{data.workinghourstitle}</Title>
          {workingHours.map((item, index) => (
            <Row key={index}>
              <IoMdTime />
              <Rule>{item.header + " - " + item.body}</Rule>
            </Row>
          ))}
          <br />
        </>
      )}
      {partnerDetail.rules && partnerDetail.rules.length && (
        <>
          <Title>{data.rulestitle}</Title>
          {partnerDetail.rules.split("\n").map((item, index) => (
            <Row key={index}>
              <IoIosAttach />
              <Rule key={index}>{item} </Rule>
            </Row>
          ))}
        </>
      )}
    </LayoutBox>
  ) : null;
};
export default MoreInfo;
