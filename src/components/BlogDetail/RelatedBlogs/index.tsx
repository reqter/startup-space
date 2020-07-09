import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
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

  function handleChange(isVisible: boolean) {
    if (isVisible)
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
      offset={{ bottom: -200 }}
    >
      <Container>
        <Title>{getValue(blogsPageData, "detailrelatedposts")}</Title>
        <RelatedList>
          {data &&
            data.map((item) => {
              return item._id === blogDetailData._id ? null : (
                <Item key={item._id} data={item} />
              );
            })}
        </RelatedList>
      </Container>
    </VisibilitySensor>
  );
};
export default RelatedBlogs;
