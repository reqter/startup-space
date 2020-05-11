import React from "react";
import Section from "../Common/Section";
import Box from "./Box";
import { Container, CopyRight } from "./styles";

const Footer = () => {
  return (
    <Section bgColor={theme`colors.black`}>
      <Container>
        <Box title="About Us">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </span>
        </Box>
        <Box title="Social Links">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </span>
        </Box>
        <Box title="Useful Links">
          <ul>
            <li>Home 2</li>
            <li>About Us</li>
            <li>Half Map Page</li>
            <li>Search Property</li>
            <li>Faq</li>
            <li>Contact Us</li>
          </ul>
        </Box>
        <Box title="World Wide">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </span>
        </Box>
      </Container>
      <CopyRight>
        © Copyright 2020. All Rights Reserved. Designed by zozothemes
      </CopyRight>
    </Section>
  );
};
export default Footer;
