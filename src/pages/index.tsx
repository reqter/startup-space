import React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
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
import First from "../components/First";
import Service from "../components/Service";
import Spaces from "../components/Spaces";
import Cities from "../components/Cities";
import NewsLetter from "../components/NewsLetter";
import Blogs from "../components/Blogs";
import Agents from "../components/Agents";

interface IProps {
  t: (key: string) => string;
  direction: string;
  getInitialProps?: (ctx: NextPageContext) => Promise<any>;
}

const Home = (): JSX.Element => {
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);
  return (
    <MainLayout>
      <Head>
        <title>{data && data.name}</title>
      </Head>
      <First />
      {data && data.isservicesenabled && <Service />}
      {data && data.isofficesenabled && <Spaces />}
      {data && data.isareaenabled && <Cities />}
      {data && data.isagentsenabled && <Agents />}
      {data && data.isnewsletterenabled && <NewsLetter />}
      {data && data.isblogenabled && <Blogs />}
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
      console.log(
        token,
        headerData,
        landingData,
        footerData,
        searchFormContentType
      );
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
