import React from "react";
import LayoutBox from "../LayoutBox";
import { Video, Paragraph } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
const Description = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const data = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );
  return (partnerDetail && partnerDetail.introduction) ||
    (partnerDetail && partnerDetail.overview) ? (
    <LayoutBox title={data.introductionboxtitle}>
      {partnerDetail.introduction && (
        <Video controls width="100%">
          <source src={partnerDetail.introduction} />
        </Video>
      )}
      {partnerDetail.overview && (
        <Paragraph>{partnerDetail.overview}</Paragraph>
      )}
    </LayoutBox>
  ) : null;
};
export default Description;
