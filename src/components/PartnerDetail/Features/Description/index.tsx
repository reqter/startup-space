import React from "react";
import LayoutBox from "../../LayoutBox";
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
        <Paragraph>{partnerDetail.overview}</Paragraph>
      )}
    </LayoutBox>
  ) : null;
};
export default Description;
