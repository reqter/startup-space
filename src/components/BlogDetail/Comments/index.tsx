import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VisibilitySensor from "react-visibility-sensor";
import { CommentsContainer, Title } from "./styles";
import CommentItem from "./CommentItem";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const BlogDetailComments = () => {
  const { query } = useRouter();
  const { _getBlogComments } = useBlogApi();
  const { blogsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const [data, setData] = useState([]);

  function handleChange(isVisible: boolean) {
    if (isVisible)
      if (!data || !data.length) {
        _getBlogComments(
          0,
          10,
          query.id as string,
          (result) => {
            setData(result);
          },
          () => {}
        );
      }
  }
  return (
    <VisibilitySensor
      onChange={handleChange}
      partialVisibility={true}
      offset={{ bottom: -150 }}
    >
      <CommentsContainer>
        {data && data.length ? (
          <>
            <Title>{getValue(blogsPageData, "detailcommentstitle")}</Title>
            {[1, 1, 1].map((item) => (
              <CommentItem data={item} />
            ))}
          </>
        ) : null}
      </CommentsContainer>
    </VisibilitySensor>
  );
};
export default BlogDetailComments;
