import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import VisibilitySensor from "react-visibility-sensor";
import { CommentsContainer, Title, LoadMore } from "./styles";
import CommentItem from "./CommentItem";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const limit = 10;
const BlogDetailComments = () => {
  const { _getBlogComments } = useBlogApi();
  const { blogsPageData = {}, blogDetailData = {} } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [commentsLength, setCommentsLength] = useState(0);

  function handleChange(isVisible: boolean) {
    if (!data || !data.length) {
      _getBlogComments(
        skip,
        limit,
        blogDetailData._id,
        (result) => {
          setData(result);
          setCommentsLength(result ? result.length : 0);
        },
        () => {}
      );
    }
  }
  function handleLoadMore() {
    _getBlogComments(
      skip + 1 * limit,
      limit,
      blogDetailData._id,
      (result) => {
        setSkip(skip + 1);
        setData([...data, ...result]);
        setCommentsLength(result ? result.length : 0);
      },
      () => {}
    );
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
            {data && data.map((item) => <CommentItem data={item} />)}
          </>
        ) : null}
        {commentsLength === limit && (
          <LoadMore onClick={handleLoadMore}>
            {getValue(blogsPageData, "commentsloadmore")}&nbsp;
            <IoIosArrowDown />
          </LoadMore>
        )}
      </CommentsContainer>
    </VisibilitySensor>
  );
};
export default BlogDetailComments;
