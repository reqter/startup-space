import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Section from "../Common/Section";
import Box from "./Box";
import FeatureItem from "./FeatureItem";
import { Container, CopyRight } from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

const Footer = () => {
  const { dispatch } = useGlobalDispatch();
  const {
    footerData,
    officesData,
    isVisibleFooter,
    curentRouterName,
  } = useGlobalState();
  const footer = footerData ? footerData[0] : {};
  const handleChange = (isVisible: boolean) => {
    if (isVisible) {
      dispatch({
        type: "TOGGLE_FOOTER_VISIBILITY",
        payload: true,
      });
    } else {
      if (isVisibleFooter) {
        dispatch({
          type: "TOGGLE_FOOTER_VISIBILITY",
          payload: false,
        });
      }
    }
  };
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: curentRouterName === "partners" ? -52 : 52 }}
    >
      <Section bgColor={theme`colors.black`}>
        <Container>
          <Box title={footer.aboutustitle}>
            <span>{footer.aboutusdescription}</span>
          </Box>
          <Box title={footer.featuredtitle}>
            {officesData &&
              officesData
                .slice(0, 3)
                .map((item, index) => <FeatureItem key={index} data={item} />)}
          </Box>
          <Box title={footer.usefullinkstitle}>
            <ul>
              <li>Home 2</li>
              <li>About Us</li>
              <li>Half Map Page</li>
              <li>Search Property</li>
              <li>Faq</li>
              <li>Contact Us</li>
            </ul>
          </Box>
          <Box title={footer.sociallinkstitle}>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </span>
          </Box>
        </Container>
        <CopyRight>{footer.copyright}</CopyRight>
      </Section>
    </VisibilitySensor>
  );
};
export default Footer;
