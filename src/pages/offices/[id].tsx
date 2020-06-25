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
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const SpaceDetail = () => {
  const { partnerDetail, partnerDetailPage } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { includeImageBaseUrl } = useObjectPropsValue();
  React.useEffect(() => {
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "partnerDetail",
    });
  }, []);

  const logo =
    partnerDetail.logo && partnerDetail.logo.length
      ? includeImageBaseUrl(partnerDetail.logo[0])
      : "";
  const pageData = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    []
  );

  return (
    <MainLayout
      title={
        (pageData.pageheadertext ? pageData.pageheadertext : "") +
        (partnerDetail.name ? partnerDetail.name : "")
      }
      logo={logo}
    >
      <Gallery data={partnerDetail && partnerDetail.images} />
      <Summery />
      <MainContent />
    </MainLayout>
  );
};

SpaceDetail.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
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
