import React from "react";
import Section from "../Common/Section";
import Box from "./Box";
import FeatureItem from "./FeatureItem";
import { Container, CopyRight } from "./styles";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";

const Footer = () => {
  const { footerData, officesData } = useGlobalState();
  const footer = footerData ? footerData[0] : {};
  return (
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
  );
};
export default Footer;
