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
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import MainLayout from "components/MainLayout";
import First from "components/Landing/First";
import Service from "components/Landing/Service";
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
  const { getValue } = useObjectPropsValue();
  const { landingData } = useGlobalState();
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), []);

  React.useEffect(() => {
    if (!landingData || landingData.length === 0) {
      getHomeData();
    }
  }, []);

  return (
    <MainLayout title={getValue(data, "name")}>
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
