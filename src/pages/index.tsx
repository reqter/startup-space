import React from "react";
import { i18n } from "../../config/Next18Wrapper";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import {
  getToken,
  getHeaderData,
  getLandingData,
  getOfficesData,
  getCitiesData,
  getAgentsData,
  getBlogsData,
  getFooterData,
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
  if (typeof window === "undefined") {
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        landingData,
        officesData,
        citiesData,
        agentsData,
        blogsData,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getLandingData(currentLanguage),
        getOfficesData(currentLanguage, 4),
        getCitiesData(currentLanguage, 4),
        getAgentsData(currentLanguage, 3),
        getBlogsData(currentLanguage, 3),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        landingData,
        officesData,
        citiesData,
        agentsData,
        blogsData,
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
export default Home;
