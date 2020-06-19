import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getPartnersData,
  getContentTypeById,
  getFooterData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import Header from "components/OfficesHeader";
import Content from "components/OfficesDataList";

const Spaces = () => {
  const { partnersPageData } = useGlobalState();
  const pageData = React.useMemo(
    () => (partnersPageData ? partnersPageData[0] : {}),
    []
  );
  return (
    <MainLayout title={pageData.pageheadertext ? pageData.pageheadertext : ""}>
      <Header />
      <Content />
    </MainLayout>
  );
};

Spaces.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        partnersPageData,
        searchFormContentType,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getPartnersData(currentLanguage),
        getContentTypeById("5ec23fa17e1a5d001b2c16f4"),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        partnersPageData,
        searchFormContentType,
        footerData,
        partnersPageUrlQuery: context.query,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  }
  return {};
};

export default Spaces;
