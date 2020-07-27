import React from "react";
import LayoutBox from "../../LayoutBox";
import { Video, Paragraph } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const Description = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (partnerDetail && partnerDetail.introduction) ||
    (partnerDetail && partnerDetail.overview) ? (
    <LayoutBox title={getValue(partnerDetail, "introductionboxtitle")}>
      {partnerDetail.introduction && partnerDetail.introduction.length ? (
        <Video controls width="100%">
          <source
            src={
              Array.isArray(partnerDetail.introduction)
                ? partnerDetail.introduction[0]
                : partnerDetail.introduction
            }
          />
        </Video>
      ) : null}
      {partnerDetail.overview && (
        <Paragraph>{getValue(partnerDetail, "overview")}</Paragraph>
      )}
    </LayoutBox>
  ) : null;
};
export default Description;
