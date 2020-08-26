import React from "react";
import { useRouter } from "next/router";
import MainLayout from "components/MainLayout";
import GridImages from "components/Common/GridImages";
import MainContent from "components/Cities";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { MetaTags, RobotsContent, PageType } from "interfaces/tag";
import {
  getToken,
  getHeaderData,
  getCityDetailPageData,
  getCityDetailData,
  getFooterData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";

const CityDetail = (props) => {
  const { query } = useRouter();
  const { _getCityDetailPageData, _getCityDetailData } = useGlobalApi();

  const { partnersPageData, cityDetailPage, cityDetail } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const imgProp = getValue(cityDetail, "thumbnail");
  const img =
    imgProp && imgProp.length ? includeImageBaseUrl(imgProp[0]) : null;

  React.useEffect(() => {
    _getCityDetailPageData();
    if (!cityDetail) {
      _getCityDetailData(query.name as string);
    }
  }, []);

  const metaTags: MetaTags = {
    keywords: ``,
    title: `${getValue(cityDetail, "name")}`,
    description: ``,
    image: img,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.website,
    canonical:
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME +
      i18n.language +
      "/cities" +
      "/" +
      cityDetail?._id,
  };

  return (
    <MainLayout metaTags={metaTags}>
      {cityDetail && cityDetail.images ? (
        <GridImages
          data={cityDetail.images}
          allPhotosBtnText={getValue(cityDetailPage, "galleryactiontext")}
        />
      ) : null}
      <MainContent />
    </MainLayout>
  );
};

CityDetail.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        cityDetailPage,
        cityDetail,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getCityDetailPageData(currentLanguage, token),
        getCityDetailData(currentLanguage, context.query.name, token),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        cityDetailPage: cityDetailPage ? cityDetailPage[0] : undefined,
        cityDetail: cityDetail ? cityDetail[0] : undefined,
        citiesPageQueryName: context.query.name,
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

export default CityDetail;
