import React from "react";
import MainLayout from "components/MainLayout";
import Gallery from "components/Gallery";
import Summery from "components/OfficeDetail/Summery";
import MainContent from "components/OfficeDetail/MainContent";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getPartnerDetailById,
  getPartnerDetailPageData,
  getFooterData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";

const SpaceDetail = () => {
  const { partnerDetail } = useGlobalState();
  return (
    <MainLayout>
      <Gallery data={partnerDetail && partnerDetail.images} />
      <Summery />
      <MainContent />
    </MainLayout>
  );
};

SpaceDetail.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    console.log(context.query.id);
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        partnerDetail,
        partnerDetailPage,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getPartnerDetailById(context.query.id, currentLanguage),
        getPartnerDetailPageData(currentLanguage),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        partnerDetail: partnerDetail ? partnerDetail.data : {},
        partnerDetailPage,
        footerData,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  }
  return {};
};

export default SpaceDetail;
