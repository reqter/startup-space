import React from "react";
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

const BlogHeader = ({}) => {
  const { blogsPageData, lastBlogItem } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();

  const img =
    lastBlogItem && lastBlogItem.thumbnail
      ? includeImageBaseUrl(lastBlogItem.thumbnail[0], "image", 1024, 350)
      : "";
  return (
    <Wrapper
      target="_blank"
      rel="noopener noreferrer"
      // href={`${currentLanguage}/offices/${data?._id}`}
    >
      <Image bgImage={img} />
      <Content>
        <TextContainer>
          <Name>{getValue(lastBlogItem, "name")}</Name>
          <Location>{getValue(blogsPageData, "blogitemactiontext")}</Location>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};
export default BlogHeader;
