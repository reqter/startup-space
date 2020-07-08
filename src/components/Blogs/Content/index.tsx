import { useState, useEffect } from "react";
import Section from "components/Common/Section";
import { Container } from "./styles";
import List from "../List";
import SideBar from "../SideBar";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useBlogApi from "hooks/useBlogApi";

const Content = () => {
  const { _getBlogsList } = useBlogApi();
  const [loading, toggleLoading] = useState(true);
  const [blogsData, setBlogs] = useState([]);
  useEffect(() => {
    _getBlogsList(
      6,
      (data) => {
        toggleLoading(false);
        setBlogs(data);
      },
      () => {}
    );
  }, []);
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <List data={blogsData} loading={loading} />
        <SideBar />
      </Container>
    </Section>
  );
};
export default Content;
