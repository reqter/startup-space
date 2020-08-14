import React from "react";
import MainLayout from "components/MainLayout";
import Content from "components/BlogDetail/Content";
import { i18n, Router } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { MetaTags, RobotsContent, PageType } from "interfaces/tag";
import { getToken, getHeaderData, getFooterData } from "hooks/useGlobalApi";
import {
  getBlogById,
  getBlogsPageData,
  getCategorisData,
  getNewestBlogs,
  getTagsData,
} from "hooks/useBlogApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";

const PageDetail = () => {
  const { _callBlogDetailPageApis } = useBlogApi();
  const { blogDetailData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  React.useEffect(() => {
    _callBlogDetailPageApis(Router.query.id as string);
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "blogDetail",
    });
  }, []);

  const img =
    blogDetailData && blogDetailData.thumbnail
      ? includeImageBaseUrl(blogDetailData.thumbnail[0], "image")
      : "";
  const blogMetaTags: MetaTags = {
    author: `${getValue(blogDetailData, "author")}`,
    keywords: `${getValue(blogDetailData, "keywords")}`,
    title: `${getValue(blogDetailData, "seotitle")}`,
    description: `${getValue(blogDetailData, "metdesc")}`,
    image: img,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.article,
    canonical:
      process.env.NEXT_PUBLIC_CANONICAL_DOMAIN_NAME +
      i18n.language +
      "/" +
      (blogDetailData
        ? blogDetailData.slug
          ? blogDetailData.slug
          : blogDetailData._id
        : blogDetailData._id),
  };

  return (
    <MainLayout metaTags={blogMetaTags}>
      <Content />
    </MainLayout>
  );
};

PageDetail.getInitialProps = async (context) => {
  if (isServer) {
    const { req, query } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        blogDetailData,
        blogsPageData,
        blogsCategories,
        newestBlogs,
        tags,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getBlogById(query.id, currentLanguage, token),
        getBlogsPageData(currentLanguage, token),
        getCategorisData(currentLanguage, token),
        getNewestBlogs(currentLanguage, token),
        getTagsData(currentLanguage, token),
        getFooterData(currentLanguage),
      ]);
      return {
        token,
        headerData,
        blogDetailData:
          blogDetailData && blogDetailData.length ? blogDetailData[0] : {},
        blogsPageData:
          blogsPageData && blogsPageData.length ? blogsPageData[0] : {},
        blogsCategories,
        newestBlogs,
        tags,
        footerData,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  }
  return {};
};

export default PageDetail;
