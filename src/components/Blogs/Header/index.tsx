import React from "react";
import { Link } from "../../../../config/Next18Wrapper";
import {
  Wrapper,
  Image,
  Content,
  TextContainer,
  Name,
  Location,
} from "./styles";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const BlogHeader = ({}) => {
  const { _callBlogPageApis } = useBlogApi();
  const { blogsPageData, lastBlogItem = {} } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();

  const img =
    lastBlogItem && lastBlogItem.thumbnail
      ? includeImageBaseUrl(lastBlogItem.thumbnail[0], "image", 1024, 350)
      : "";
  function handleClicked() {
    _callBlogPageApis(lastBlogItem._id);
  }
  return (
    <Link
      href={`/blogs/${
        lastBlogItem && lastBlogItem.slug ? lastBlogItem.slug : lastBlogItem._id
      }`}
    >
      <Wrapper onClick={handleClicked}>
        <Image bgImage={img} />
        <Content>
          <TextContainer>
            <Name>{getValue(lastBlogItem, "name")}</Name>
            <Location>{getValue(blogsPageData, "blogitemactiontext")}</Location>
          </TextContainer>
        </Content>
      </Wrapper>
    </Link>
  );
};
export default BlogHeader;
