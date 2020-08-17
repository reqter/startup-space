import React from "react";
import MainLayout from "components/MainLayout";
import Gallery from "components/Common/Gallery";
import Summery from "components/PartnerDetail/Summery";
import Content from "components/PartnerDetail/MainContent";
import { i18n, Router } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { MetaTags, RobotsContent, PageType } from "interfaces/tag";
import useGlobalApi, {
  getToken,
  getHeaderData,
  getPartnerDetailById,
  getPartnerDetailPageData,
  getFooterData,
} from "hooks/useGlobalApi";
import useBlogApi, { getNewestBlogs } from "hooks/useBlogApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const PartnerDetail = () => {
  const { _getPartnerDetailById, _getPartnerDetailPage } = useGlobalApi();
  const { _getNewestBlogs } = useBlogApi();
  const {
    partnerDetail = {},
    partnerDetailPage,
    partnerDetailId,
  } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();

  React.useEffect(() => {
    _getPartnerDetailById(Router.query.id);
    _getPartnerDetailPage();
    _getNewestBlogs();
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

  const metaTags: MetaTags = {
    keywords: `${getValue(partnerDetail, "keywords")}`,
    title: `${
      (pageData.pageheadertext ? pageData.pageheadertext : "") +
      (partnerDetail.name ? partnerDetail.name : "")
    }`,
    description: `${getValue(partnerDetail, "metadescription")}`,
    image: logo,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.partner,
    canonical:
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME +
      i18n.language +
      "/offices" +
      "/" +
      partnerDetail.partnerkey,
  };

  return (
    <MainLayout metaTags={metaTags} logo={logo}>
      <Gallery data={partnerDetail ? partnerDetail.images : []} />
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
