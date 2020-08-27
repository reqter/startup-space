import { Link } from "../../../../config/Next18Wrapper";
import dynamic from "next/dynamic";
import {
  BlogDetailContainer,
  Image,
  Date,
  Title,
  Tags,
  TagItem,
  Html,
  CategoriesContainer,
  CategoriesText,
  CategoriesList,
  CategoriesListItem,
} from "./styles";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useDate from "hooks/useDate";

const HtmlViewer = dynamic(() => import("../../Common/TextEditorViewer"), {
  ssr: false,
});

const BlogDetail = () => {
  const { blogsPageData, blogDetailData } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  const { dateFromNow } = useDate();
  const img =
    blogDetailData && blogDetailData.thumbnail
      ? includeImageBaseUrl(blogDetailData.thumbnail[0], "image", 500, 250)
      : "";
  return (
    <BlogDetailContainer>
      <Image src={img} />
      <Date>{dateFromNow(getValue(blogDetailData, "publishdate"))}</Date>
      <Title>{getValue(blogDetailData, "name")}</Title>
      {blogDetailData && blogDetailData.tags && blogDetailData.tags.length ? (
        <Tags>
          {blogDetailData.tags.map((item, index) => (
            <TagItem key={index}>{getValue(item, "fields.name")}</TagItem>
          ))}
        </Tags>
      ) : null}
      <HtmlViewer content={getValue(blogDetailData, "body")} />

      <CategoriesContainer>
        {blogDetailData &&
        blogDetailData.categoryid &&
        blogDetailData.categoryid.length ? (
          <>
            <CategoriesText>
              {getValue(blogsPageData, "categoriesboxtitle")}:{" "}
            </CategoriesText>
            <CategoriesList>
              {blogDetailData.categoryid.map((item) => (
                <Link key={item._id} href={`/blogs?categoryid=${item._id}`}>
                  <span className="text-blue-500 text-sm mt-1 cursor-pointer">
                    {getValue(item, "fields.name")},{" "}
                  </span>
                </Link>
              ))}
            </CategoriesList>
          </>
        ) : null}
        {blogDetailData && blogDetailData.tags && blogDetailData.tags.length ? (
          <>
            <CategoriesText>
              {getValue(blogsPageData, "tagsboxtitle")}:{" "}
            </CategoriesText>
            <CategoriesList>
              {blogDetailData.tags.map((item) => (
                <Link key={item._id} href={`/blogs?tags=${item._id}`}>
                  <span className="text-blue-500 text-sm mt-1  cursor-pointer">
                    #{getValue(item, "fields.name")},{" "}
                  </span>
                </Link>
              ))}
            </CategoriesList>
          </>
        ) : null}
      </CategoriesContainer>
      <CommentForm />
      <Comments />
    </BlogDetailContainer>
  );
};
export default BlogDetail;
