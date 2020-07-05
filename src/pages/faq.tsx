import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getFooterData,
  getFAQsPageData,
  getFAQsData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import Header from "components/Common/PagesHeader";
import Content from "components/FAQ/ExpanderContent";
import NewsLetter from "components/Common/NewsLetterSmall";

const Faq = () => {
  const { faqsPageData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();

  const imgProp = getValue(faqsPageData, "headerimage");
  const img =
    imgProp && imgProp.length ? includeImageBaseUrl(imgProp[0]) : null;

  React.useEffect(() => {
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "faq",
    });
  }, []);

  return (
    <MainLayout title={getValue(faqsPageData, "name")}>
      <Header
        image={img}
        fallbackImage="https://i.pinimg.com/736x/fe/45/da/fe45daef11dd032c0ecbe7fdfee97057.jpg"
        title={getValue(faqsPageData, "headertitle")}
      />
      <Content />
      <NewsLetter />
    </MainLayout>
  );
};

Faq.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        faqsPageData,
        faqsData,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getFAQsPageData(currentLanguage),
        getFAQsData(currentLanguage),
        getFooterData(currentLanguage),
      ]);

      return {
        token,
        headerData,
        faqsPageData:
          faqsPageData && faqsPageData.length ? faqsPageData[0] : {},
        faqsData: faqsData.sort(function (a, b) {
          return a.index - b.index;
        }),
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

export default Faq;
