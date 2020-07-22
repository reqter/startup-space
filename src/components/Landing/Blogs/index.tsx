import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import { Button } from "./styles";
import Section from "../../Common/Section";
import List from "./BlogList";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useBlogApi from "hooks/useBlogApi";

const LandingBlogs = () => {
  const {
    _getBlogsList,
    _getBlogsPageData,
    _getLastBlog,
    _getCategoriesData,
    _getNewestBlogs,
    _getTagsData,
  } = useBlogApi();
  const { landingData, blogsData } = useGlobalState();
  const [blogsList, setBlogs] = React.useState([]);
  const data = React.useMemo(() => (landingData ? landingData[0] : {}), [
    landingData,
  ]);
  React.useEffect(() => {
    if (!blogsData)
      _getBlogsList(
        0,
        3,
        null,
        null,
        (data) => setBlogs(data),
        () => {}
      );
  }, []);

  function handleMoreClicked() {
    _getBlogsPageData();
    _getLastBlog();
    _getCategoriesData();
    _getNewestBlogs();
    _getTagsData();
  }
  return data.isblogenabled ? (
    <Section
      bgColor={theme`colors.white`}
      title={data.blogheading}
      header={data.blogtitle}
    >
      <List data={blogsList} />
      <Button onClick={handleMoreClicked}>
        <Link href={`/blogs`}>
          {data && data.blogactiontext ? data.blogactiontext : ""}
        </Link>
      </Button>
    </Section>
  ) : null;
};
export default LandingBlogs;
