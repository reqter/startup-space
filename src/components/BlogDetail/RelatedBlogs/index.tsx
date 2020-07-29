import { useEffect, useState } from "react";
import { Container, Title, RelatedList } from "./styles";
import Item from "./Item";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const RelatedBlogs = () => {
  const { blogsPageData, blogDetailData } = useGlobalState();
  const { _getRelatedPosts } = useBlogApi();
  const { getValue } = useObjectPropsValue();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!data || !data.length) {
      const categories =
        blogDetailData &&
        blogDetailData.categoryid &&
        blogDetailData.categoryid.length
          ? blogDetailData.categoryid
          : null;
      let c = "";
      if (categories) {
        c = categories.reduce((acc, item) => {
          acc = acc + "," + item._id;
          return acc;
        }, "");
      }
      if (c.length) {
        c = c.substr(1);
      }
      _getRelatedPosts(
        c,
        null,
        (result = []) => {
          const d = result.filter((item) => item._id !== blogDetailData._id);
          setData(d);
        },
        () => {}
      );
    }
  }, []);

  return (
    <Container>
      {data && data.length ? (
        <Title>{getValue(blogsPageData, "detailrelatedposts")}</Title>
      ) : null}
      <RelatedList>
        {data &&
          data.map((item, index) => {
            return <Item key={index} data={item} />;
          })}
      </RelatedList>
    </Container>
  );
};
export default RelatedBlogs;
