import React from "react";
import MainLayout from "components/MainLayout";
import Gallery from "components/Common/Gallery";
import Summery from "components/PartnerDetail/Summery";
import Content from "components/PartnerDetail/MainContent";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getPartnerDetailById,
  getPartnerDetailPageData,
  getFooterData,
} from "hooks/useGlobalApi";
import { getNewestBlogs } from "hooks/useBlogApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const PartnerDetail = () => {
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
      {partnerDetail && partnerDetail.images && partnerDetail.images.length ? (
        <Gallery data={partnerDetail && partnerDetail.images} />
      ) : null}
      <Summery />
      <Content />
    </MainLayout>
  );
};

PartnerDetail.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        partnerDetail,
        partnerDetailPage,
        newestBlogs,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getPartnerDetailById(context.query.id, currentLanguage),
        getPartnerDetailPageData(currentLanguage),
        getNewestBlogs(currentLanguage, token),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        partnerDetail:
          partnerDetail && partnerDetail.data ? partnerDetail.data.fields : {},
        partnerDetailId:
          partnerDetail && partnerDetail.data ? partnerDetail.data._id : "",
        partnerDetailPage,
        newestBlogs,
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

export default PartnerDetail;
