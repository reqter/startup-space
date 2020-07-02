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
import useGlobalState from "../hooks/useGlobal/useGlobalState";
import MainLayout from "../components/MainLayout";
import First from "../components/LandingComponents/First";
import Service from "../components/LandingComponents/Service";
import Spaces from "../components/LandingComponents/Spaces";
import Cities from "../components/LandingComponents/Cities";
import NewsLetter from "../components/LandingComponents/NewsLetter";
import Blogs from "../components/LandingComponents/Blogs";
import Agents from "../components/LandingComponents/Agents";

interface IProps {
  t: (key: string) => string;
  direction: string;
  getInitialProps?: (ctx: NextPageContext) => Promise<any>;
}

const Home = (): JSX.Element => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <MainLayout title={data && data.name}>
      <First />
      <Service />
      <Spaces />
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
