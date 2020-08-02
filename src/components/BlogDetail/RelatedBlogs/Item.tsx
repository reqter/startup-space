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
import useDate from "hooks/useDate";

const RelatedBlogItem = ({ data }) => {
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { _callBlogDetailPageApis } = useBlogApi();
  const { dateFromNow } = useDate();

  const img =
    data && data.thumbnail
      ? includeImageBaseUrl(data.thumbnail[0], "image", 500, 250)
      : "";
  function handleClicked() {
    _callBlogDetailPageApis(data._id);
  }

  return (
    <Link
      href={`/blogs/${data ? (data.slug ? data.slug : data._id) : data._id}`}
    >
      <CardWrapper onClick={handleClicked}>
        <Image bgImage={img} />
        <Content>
          <MetaData>
            {data && data.categoryid && data.categoryid.length
              ? data.categoryid.map((item, index) => (
                  <Category key={index}>
                    {getValue(item, "fields.name")}
                  </Category>
                ))
              : null}
            <Date>{dateFromNow(getValue(data, "publishdate"))}</Date>
          </MetaData>
          <Name>{getValue(data, "name")}</Name>
        </Content>
      </CardWrapper>
    </Link>
  );
};
export default RelatedBlogItem;
