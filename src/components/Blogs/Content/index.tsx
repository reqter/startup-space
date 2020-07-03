import { useState, useEffect } from "react";
import Section from "components/Common/Section";
import { Container, Button } from "./styles";
import BlogItem from "components/Common/BlogItem";
import Loading from "components/Common/CardSkeleton";
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
    <Section bgColor={theme`colors.white`}>
      <Container>
        {loading ? (
          <>
            <Loading colSpan={3} />
            <Loading colSpan={3} />
            <Loading colSpan={3} />
          </>
        ) : blogsData ? (
          blogsData.map((item, index) => (
            <BlogItem key={index} data={item} actionName="Read more..." />
          ))
        ) : null}
      </Container>
      <Button>Load More...</Button>
    </Section>
  );
};
export default Content;
