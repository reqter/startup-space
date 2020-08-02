import React from "react";
import MainLayout from "components/MainLayout";
import Content from "components/BlogDetail/Content";
import { i18n, Router } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
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

const BlogDetail = () => {
  const { _callBlogDetailPageApis } = useBlogApi();
  const { blogDetailData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue } = useObjectPropsValue();
  React.useEffect(() => {
    _callBlogDetailPageApis(Router.query.id as string);
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "blogDetail",
    });
  }, []);

  return (
    <MainLayout title={getValue(blogDetailData, "name")}>
      <Content />
    </MainLayout>
  );
};

BlogDetail.getInitialProps = async (context) => {
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

export default BlogDetail;
