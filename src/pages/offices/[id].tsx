import React from "react";
import MainLayout from "../../components/MainLayout";
import Gallery from "../../components/Gallery";
import Summery from "../../components/OfficeDetail/Summery";
import MainContent from "../../components/OfficeDetail/MainContent";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "./../../utils/isServer";
import {
  getToken,
  getHeaderData,
  getFooterData,
} from "../../hooks/useGlobalApi";

const SpaceDetail = () => {
  return (
    <MainLayout>
      <Gallery />
      <Summery />
      <MainContent />
    </MainLayout>
  );
};

SpaceDetail.getInitialProps = async ({ req }) => {
  if (isServer) {
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [headerData, footerData] = await Promise.all([
        getHeaderData(currentLanguage),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
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

export default SpaceDetail;
