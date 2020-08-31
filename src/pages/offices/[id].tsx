import React from "react";
import NotFound from "components/Common/NotFoundItem";
import MainLayout from "components/MainLayout";
import GridImages from "components/Common/GridImages";
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

const PartnerDetail = (props) => {
  const {
    _getPartnersPageData,
    _getPartnerDetailById,
    _getPartnerDetailPage,
  } = useGlobalApi();
  const { _getNewestBlogs } = useBlogApi();
  const { partnerDetail, partnerDetailPage } = useGlobalState();
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
    partnerDetail && partnerDetail.logo && partnerDetail.logo.length
      ? includeImageBaseUrl(partnerDetail.logo[0])
      : "";
  const pageData = React.useMemo(
    () => (partnerDetailPage ? partnerDetailPage[0] : {}),
    [partnerDetailPage]
  );

  const metaTags: MetaTags = {
    keywords: `${getValue(partnerDetail, "keywords")}`,
    title: `${
      (pageData.pageheadertext ? pageData.pageheadertext : "") +
      (partnerDetail && partnerDetail.name ? partnerDetail.name : "")
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
      partnerDetail?.partnerkey,
  };

  const img =
    pageData && pageData.failedimage
      ? includeImageBaseUrl(pageData.failedimage[0], "image", 500, 500)
      : "";
  function handleClick() {
    _getPartnersPageData();
  }

  return (
    <MainLayout metaTags={metaTags} logo={logo}>
      {!props.partnerDetail && !partnerDetail ? (
        <NotFound
          image={img}
          title={getValue(pageData, "failedtitle")}
          description={getValue(pageData, "faileddescription")}
          actionText={getValue(pageData, "failedactiontext")}
          url="/offices"
          action={handleClick}
        />
      ) : (
        <>
          <GridImages
            data={partnerDetail ? partnerDetail.images : []}
            allPhotosBtnText={getValue(pageData, "showgallerytext")}
          />
          {/* <Gallery data={partnerDetail ? partnerDetail.images : []} /> */}
          <Summery />
          <Content />
        </>
      )}
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
          partnerDetail && partnerDetail.data
            ? partnerDetail.data.fields
            : undefined,
        partnerDetailId:
          partnerDetail && partnerDetail.data ? partnerDetail.data._id : "",
        partnerDetailPage,
        newestBlogs,
        footerData,
        isPartnerDetailPage: true,
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
