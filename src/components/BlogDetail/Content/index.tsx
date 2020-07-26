import { useState, useEffect } from "react";
import Section from "components/Common/Section";
import { Container } from "./styles";
import Detail from "../Detail";
import SideBar from "../../Blogs/SideBar";
import RelatedBlogs from "../RelatedBlogs";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const Content = () => {
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <Detail />
        <SideBar />
      </Container>
      <RelatedBlogs />
    </Section>
  );
};
export default Content;
