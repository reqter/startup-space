import {
  CardWrapper,
  Image,
  Content,
  Name,
  MetaData,
  Category,
  Date,
} from "./styles";
import { Link } from "../../../../config/Next18Wrapper";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const RelatedBlogItem = ({ data }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { _callBlogPageApis } = useBlogApi();
  const img =
    data && data.thumbnail
      ? includeImageBaseUrl(data.thumbnail[0], "image", 500, 250)
      : "";
  function handleClicked() {
    _callBlogPageApis(data._id);
  }
  return (
    <Link href={`/blogs/${data._id}`}>
      <CardWrapper onClick={handleClicked}>
        <Image bgImage={img} />
        <Content>
          <MetaData>
            {data && data.categoryid && data.categoryid.length
              ? data.categoryid.map((item) => (
                  <Category>{getValue(item, "fields.name")}</Category>
                ))
              : null}
            <Date>JANUARY 9, 2018</Date>
          </MetaData>
          <Name>{getValue(data, "name")}</Name>
        </Content>
      </CardWrapper>
    </Link>
  );
};
export default RelatedBlogItem;
