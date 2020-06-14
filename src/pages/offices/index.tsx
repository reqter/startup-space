import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getContentTypeById,
  getFooterData,
} from "hooks/useGlobalApi";
import Header from "components/OfficesHeader";
import Content from "components/OfficesDataList";

const Spaces = () => {
  return (
    <MainLayout>
      <Header />
      <Content />
    </MainLayout>
  );
};

Spaces.getInitialProps = async ({ req }) => {
  if (isServer) {
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        searchFormContentType,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getContentTypeById("5ec23fa17e1a5d001b2c16f4"),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        searchFormContentType,
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

export default Spaces;
