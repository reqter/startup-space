import React from "react";
import { NextPage, NextPageContext } from "next";
import isServer from "utils/isServer";
import { i18n } from "../../config/Next18Wrapper";
import {
  getToken,
  getHeaderData,
  getLandingData,
  getFooterData,
  getContentTypeById,
} from "../hooks/useGlobalApi";
import { MetaTags, RobotsContent, PageType } from "interfaces/tag";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import MainLayout from "components/MainLayout";
import First from "components/Landing/First";
import Service from "components/Landing/Service";
import Activities from "components/Landing/Activities";
import Spaces from "components/Landing/Spaces";
import Cities from "components/Landing/Cities";
import NewsLetter from "components/Landing/NewsLetter";
import Blogs from "components/Landing/Blogs";
import Agents from "components/Landing/Agents";

interface IProps {
  t: (key: string) => string;
  direction: string;
  getInitialProps?: (ctx: NextPageContext) => Promise<any>;
}

const Home = (): JSX.Element => {
  const { getHomeData } = useGlobalApi();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  const img =
    data && data.metatagimage
      ? includeImageBaseUrl(data.metatagimage[0], "image", 500, 250)
      : "";
  const landingMetaTags: MetaTags = {
    keywords: `${getValue(data, "metatagkeywords")}`,
    title: `${getValue(data, "name")}`,
    description: `${getValue(data, "metatagdescription")}`,
    image: img,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.website,
    canonical: process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME + i18n.language,
  };

  React.useEffect(() => {
    if (!landingData || landingData.length === 0) {
      getHomeData();
    }
  }, []);

  return (
    <MainLayout metaTags={landingMetaTags}>
      <First />
      <Service />
      <Spaces />
      <Activities />
      <Cities />
      <Agents />
      <NewsLetter />
      <Blogs />
    </MainLayout>
  );
};

Home.getInitialProps = async ({ req }) => {
  if (isServer) {
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        landingData,
        footerData,
        searchFormContentType,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getLandingData(currentLanguage),
        getFooterData(currentLanguage),
        getContentTypeById("5ec23fa17e1a5d001b2c16f4"),
      ]);
      if (searchFormContentType) {
        searchFormContentType.fields = searchFormContentType.fields.sort(
          function (a, b) {
            return a.order - b.order;
          }
        );
      }
      return {
        token,
        headerData,
        landingData,
        footerData,
        searchFormContentType,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  }
  return {};
};
export default Home;
