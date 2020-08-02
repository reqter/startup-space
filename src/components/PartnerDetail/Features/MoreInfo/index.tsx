import React from "react";
import { IoMdTime, IoIosAttach } from "react-icons/io";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import LayoutBox from "../../LayoutBox";
import { Title, Row, Rule } from "./styles";

const MoreInfo = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );
  const workingHours =
    partnerDetail && partnerDetail.workinghours
      ? JSON.parse(partnerDetail.workinghours)
      : [];
  console.log(workingHours);
  return (partnerDetail && workingHours && workingHours.length) ||
    (partnerDetail && partnerDetail.rules && partnerDetail.rules.length) ? (
    <LayoutBox title={getValue(data, "thingstoknowboxtitle")}>
      {workingHours && workingHours.length ? (
        <>
          <Title>{getValue(data, "workinghourstitle")}</Title>
          {workingHours.map((item, index) =>
            item && item.header && item.body ? (
              <Row key={index}>
                <IoMdTime />
                <Rule>{item.header + " - " + item.body}</Rule>
              </Row>
            ) : null
          )}
          <br />
        </>
      ) : null}
      {partnerDetail.rules && partnerDetail.rules.length ? (
        <>
          <Title>{getValue(data, "rulestitle")}</Title>
          {partnerDetail.rules.split("\n").map((item, index) =>
            item && item !== "undefined" ? (
              <Row key={index}>
                <IoIosAttach />
                <Rule key={index}>{item} </Rule>
              </Row>
            ) : null
          )}
        </>
      ) : null}
    </LayoutBox>
  ) : null;
};
export default MoreInfo;
