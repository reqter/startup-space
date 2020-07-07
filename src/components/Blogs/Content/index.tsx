import { useState, useEffect } from "react";
import Section from "components/Common/Section";
import { Container } from "./styles";
import List from "../List";
import SideBar from "../SideBar";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const Content = () => {
  const { getBlogs } = useGlobalApi();
  const { landingData } = useGlobalState();
  const [loading, toggleLoading] = useState(true);
  const [blogsData, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs(
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
        <SideBar data={blogsData} />
      </Container>
    </Section>
  );
};
export default Content;
