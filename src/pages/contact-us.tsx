import React from "react";
import MainLayout from "components/MainLayout";
import Section from "components/Common/Section";
import { i18n } from "../../config/Next18Wrapper";
import isServer from "utils/isServer";
import {
  getToken,
  getHeaderData,
  getContactUsPageData,
  getFooterData,
} from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useGlobalApi from "hooks/useGlobalApi";
import Header from "components/Common/PagesHeader";
import InfoItems from "components/Contact-us/InfoItems";
import MapForm from "components/Contact-us/MapForm";
import NewsLetter from "components/Common/NewsLetterSmall";

const ContactUs = () => {
  const { contactUsPageData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();

  const imgProp = getValue(contactUsPageData, "headerimage");
  const img =
    imgProp && imgProp.length ? includeImageBaseUrl(imgProp[0]) : null;

  React.useEffect(() => {
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "contactUs",
    });
  }, []);

  return (
    <MainLayout title={getValue(contactUsPageData, "name")}>
      <Header
        image={img}
        fallbackImage="https://i.pinimg.com/736x/fe/45/da/fe45daef11dd032c0ecbe7fdfee97057.jpg"
        title={getValue(contactUsPageData, "headertitle")}
      />
      <Section bgColor={theme`colors.gray.100`}>
        <InfoItems />
        <MapForm />
      </Section>
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
      const [headerData, contactUsPageData, footerData] = await Promise.all([
        getHeaderData(currentLanguage),
        getContactUsPageData(currentLanguage),
        getFooterData(currentLanguage),
      ]);

      return {
        token,
        headerData,
        contactUsPageData:
          contactUsPageData && contactUsPageData.length
            ? contactUsPageData[0]
            : {},
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
