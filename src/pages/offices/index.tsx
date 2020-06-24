import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getPartnersPageData,
  getContentTypeById,
  getFooterData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import Header from "components/OfficesHeader";
import Content from "components/OfficesDataList";

const Spaces = () => {
  const { partnersPageData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { _getPartnersPageData } = useGlobalApi();
  const { getValue } = useObjectPropsValue();

  React.useEffect(() => {
    _getPartnersPageData();
    return () => {
      // clean the url query data
      dispatch({
        type: "SET_PARTNERS_QUERY_DATA",
        payload: {
          data: null,
          isNeedConvert: true,
        },
      });
    };
  }, []);

  return (
    <MainLayout title={getValue(partnersPageData, "pageheadertext")}>
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
        getPartnersPageData(currentLanguage),
        getContentTypeById("5ec23fa17e1a5d001b2c16f4"),
        getFooterData(currentLanguage),
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
        partnersPageData:
          partnersPageData && partnersPageData.length
            ? partnersPageData[0]
            : {},
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
