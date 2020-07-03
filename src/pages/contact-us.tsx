import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { getToken, getHeaderData, getFooterData } from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import Header from "components/Common/PagesHeader";
import InfoItems from "components/Contact-us/InfoItems";
import NewsLetter from "components/Common/NewsLetterSmall";

const ContactUs = () => {
  const { dispatch } = useGlobalDispatch();
  const { getValue } = useObjectPropsValue();

  React.useEffect(() => {
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "contactUs",
    });
  }, []);

  return (
    <MainLayout title={"تماس با ما"}>
      <Header
        image={null}
        fallbackImage="https://i.pinimg.com/736x/fe/45/da/fe45daef11dd032c0ecbe7fdfee97057.jpg"
        title="تماس با ما"
      />
      <InfoItems />
      <NewsLetter />
    </MainLayout>
  );
};

ContactUs.getInitialProps = async (context) => {
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

export default ContactUs;
