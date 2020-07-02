import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { getToken, getHeaderData, getFooterData } from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import Header from "components/FaqComponents/HeaderFAQ";
import Content from "components/FaqComponents/ExpanderContent";
import NewsLetter from "components/NewsLetterSmall";

const Faq = () => {
  const { dispatch } = useGlobalDispatch();
  const { getValue } = useObjectPropsValue();

  React.useEffect(() => {
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "faq",
    });
  }, []);

  return (
    <MainLayout title={"سئوالات متدوال"}>
      <Header />
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

export default Faq;
