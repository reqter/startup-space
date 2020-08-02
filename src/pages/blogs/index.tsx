import React from "react";
import MainLayout from "components/MainLayout";
import { i18n } from "../../../config/Next18Wrapper";
import isServer from "utils/isServer";
import { getToken, getHeaderData, getFooterData } from "hooks/useGlobalApi";
import {
  getBlogsPageData,
  getLastBlog,
  getCategorisData,
  getNewestBlogs,
  getTagsData,
} from "hooks/useBlogApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import useBlogApi from "hooks/useBlogApi";
import Header from "components/Blogs/Header";
import Content from "components/Blogs/Content";
import NewsLetter from "components/Common/NewsLetterSmall";

const Blogs = () => {
  const { _callBlogPageApis } = useBlogApi();
  const { blogsPageData } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { getValue } = useObjectPropsValue();

  React.useEffect(() => {
    _callBlogPageApis();
    dispatch({
      type: "SET_CURRENT_ROUTER_NAME",
      payload: "blogs",
    });
  }, []);

  return (
    <MainLayout title={getValue(blogsPageData, "name")}>
      <Header />
      <Content />
      <NewsLetter />
    </MainLayout>
  );
};

Blogs.getInitialProps = async (context) => {
  if (isServer) {
    const { req } = context;
    const currentLanguage = req ? req.language : i18n.language;
    try {
      const token = await getToken();
      const [
        headerData,
        blogsPageData,
        lastBlogItem,
        blogsCategories,
        newestBlogs,
        tags,
        footerData,
      ] = await Promise.all([
        getHeaderData(currentLanguage),
        getBlogsPageData(currentLanguage, token),
        getLastBlog(currentLanguage, token),
        getCategorisData(currentLanguage, token),
        getNewestBlogs(currentLanguage, token),
        getTagsData(currentLanguage, token),
        getFooterData(currentLanguage),
      ]);

      return {
        token,
        headerData,
        blogsPageData:
          blogsPageData && blogsPageData.length ? blogsPageData[0] : {},
        lastBlogItem:
          lastBlogItem && lastBlogItem.length ? lastBlogItem[0] : {},
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

export default Blogs;
