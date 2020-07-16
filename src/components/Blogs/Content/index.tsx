import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Section from "components/Common/Section";
import { Container } from "./styles";
import List from "../List";
import SideBar from "../SideBar";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useBlogApi from "hooks/useBlogApi";

const limit: number = 6;
const Content = () => {
  const { query } = useRouter();
  const { _getBlogsList } = useBlogApi();
  const [loading, toggleLoading] = useState(true);
  const [blogsData, setBlogs] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    if (!loading) {
      toggleLoading(true);
    }
    _getBlogsList(
      skip * limit,
      limit,
      query.categoryid,
      query.tags,
      (data) => {
        toggleLoading(false);
        setBlogs(data);
      },
      () => {}
    );
  }, [query]);
  function handleNextPage() {
    if (!loading) {
      toggleLoading(true);
      setSkip(skip + 1);
      _getBlogsList(
        skip + 1 * limit,
        limit,
        query.categoryid,
        query.tags,
        (data) => {
          toggleLoading(false);
          setBlogs(data);
        },
        () => {}
      );
    }
  }
  function handlePrevPage() {
    if (!loading) {
      toggleLoading(true);
      setSkip(skip - 1);
      _getBlogsList(
        skip + -1 * limit,
        limit,
        query.categoryid,
        query.tags,
        (data) => {
          toggleLoading(false);
          setBlogs(data);
        },
        () => {}
      );
    }
  }
  return (
    <Section bgColor={theme`colors.gray.100`}>
      <Container>
        <List
          data={blogsData}
          loading={loading}
          skip={skip}
          limit={limit}
          onNextPageClicked={handleNextPage}
          onPrevClicked={handlePrevPage}
        />
        <SideBar />
      </Container>
    </Section>
  );
};
export default Content;
