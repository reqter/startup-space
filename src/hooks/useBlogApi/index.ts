import fetch from "isomorphic-unfetch";
import { clientid, urls } from "../../utils/constants";
import useGlobalState from "../useGlobal/useGlobalState";
import useGlobalDispatch from "../useGlobal/useGlobalDispatch";
let token: string = "";
const setToken = (t: string) => {
  token = t;
};
const getLocalToken = () => {
  return token;
};
// ===
const fetcher = (url) => (params) =>
  fetch(urls.baseUrl + url, params).then((res) => res.json());

const getToken = async () => {
  const t = await fetcher(urls.token)({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      clientid,
    },
  });
  setToken(t.access_token);
  return t.access_token;
};
const getBlogsPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.blogsPageGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getLastBlog = async (lang: string, token?: string) => {
  return await fetcher(
    urls.blogs +
      `?lang=${lang}&limit=${1}&loadrelations=false&sort=-fields.publishdate`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getCategorisData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.blogsCategoriesGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getNewestBlogs = async (lang: string, token?: string) => {
  return await fetcher(
    urls.blogs + `?lang=${lang}&limit=${4}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getTagsData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.blogsTagsGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};

const getBlogsListData = async (
  lang: string,
  skip: number,
  limit: number,
  categoryId: number,
  tags: number,
  token?: string
) => {
  const url =
    urls.blogs +
    `?lang=${lang}&skip=${skip}&limit=${limit}${
      categoryId ? "&fields.categoryid=" + categoryId : ""
    }${
      tags ? "&fields.tags=" + tags : ""
    }&loadrelations=false&sort=-fields.publishdate`;
  return await fetcher(url)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getBlogById = async (
  id: string | number,
  lang: string,
  token?: string
) => {
  const url = urls.blogs + `?lang=${lang}&fields.slug=${id}`;
  return await fetcher(url)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getRelatedPost = async (
  lang: string,
  categoryId: number,
  tags: number,
  token?: string
) => {
  const url =
    urls.blogs +
    `?lang=${lang}&skip=0&limit=3${
      categoryId ? "&fields.categoryid=" + categoryId : ""
    }${tags ? "&fields.tags=" + tags : ""}`;
  return await fetcher(url)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getBlogComments = async (
  lang: string,
  skip: string | number,
  limit: string | number,
  blogId: string,
  token?: string
) => {
  const url =
    urls.getReviewsBaseUrl +
    "/" +
    blogId +
    `?lang=${lang}&skip=${skip}&limit=${limit}&loadrelations=false`;
  return await fetcher(url)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const addReview = async (
  name: string,
  email: string,
  body: string,
  blogId: string,
  token?: string
) => {
  return await fetcher(urls.addReview)({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
    body: JSON.stringify({
      name,
      body,
      objectid: blogId,
      email,
    }),
  });
};

const useBlogApi = () => {
  const {
    currentLanguage,
    token,
    blogsPageData,
    blogsCategories,
    newestBlogs,
    tags,
    lastBlogItem,
    blogDetailData,
  } = useGlobalState();

  const { dispatch } = useGlobalDispatch();
  const storeData = (key, value) =>
    dispatch({
      type: "SET_DATA",
      payload: {
        name: key,
        value,
      },
    });
  const _getBlogsPageData = () => {
    if (!blogsPageData) {
      getBlogsPageData(currentLanguage, token).then((data) => {
        storeData("blogsPageData", data && data.length ? data[0] : null);
      });
    }
  };
  const _getCategoriesData = () => {
    if (!blogsCategories) {
      getCategorisData(currentLanguage, token).then((data) => {
        storeData("blogsCategories", data ? data : null);
      });
    }
  };
  const _getNewestBlogs = () => {
    if (!newestBlogs) {
      getNewestBlogs(currentLanguage, token).then((data) => {
        storeData("newestBlogs", data ? data : null);
      });
    }
  };
  const _getTagsData = () => {
    if (!tags) {
      getTagsData(currentLanguage, token).then((data) => {
        storeData("tags", data ? data : null);
      });
    }
  };
  const _getLastBlog = () => {
    if (!lastBlogItem) {
      getLastBlog(currentLanguage, token).then((data) => {
        storeData("lastBlogItem", data && data.length ? data[0] : null);
      });
    }
  };
  const _getRelatedPosts = (categoryId, tags, onSuccess, onError) => {
    getRelatedPost(currentLanguage, categoryId, tags, token)
      .then((data) => onSuccess && onSuccess(data))
      .catch(() => onError && onError());
  };
  const _getBlogsList = async (
    skip: number,
    limit: number,
    categoryId,
    tags,
    onSuccess,
    onError
  ) => {
    getBlogsListData(currentLanguage, skip, limit, categoryId, tags, token)
      .then((data) => {
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch(() => onError && onError());
  };
  const _getBlogComments = (
    skip: string | number,
    limit: string | number = 25,
    blogId: string,
    onSuccess: (data: object[]) => unknown,
    onError: () => unknown
  ) => {
    getBlogComments(currentLanguage, skip, limit, blogId, token)
      .then((data) => {
        if (onSuccess) {
          onSuccess(data);
        }
      })
      .catch((error) => {
        if (onError) {
          onError();
        }
      });
  };

  const _addReview = (name, email, body, blogId, onSuccess, onError) => {
    addReview(name, email, body, blogId, token).then(() => {
      onSuccess();
    });
  };
  const _callBlogDetailPageApis = (blogId: string | number) => {
    if (!blogDetailData) {
      _getBlogsPageData();
      getBlogById(blogId, currentLanguage, token).then((data) => {
        storeData("blogDetailData", data && data.length ? data[0] : {});
      });
      _getCategoriesData();
      _getNewestBlogs();
      _getTagsData();
    }
  };
  const _callBlogPageApis = () => {
    _getBlogsPageData();
    _getLastBlog();
    _getCategoriesData();
    _getNewestBlogs();
    _getTagsData();
  };
  return {
    _getBlogsPageData,
    _getCategoriesData,
    _getNewestBlogs,
    _getTagsData,
    _getLastBlog,
    _getBlogsList,
    _getRelatedPosts,
    _getBlogComments,
    _addReview,
    _callBlogPageApis,
    _callBlogDetailPageApis,
  };
};
export default useBlogApi;

export {
  getToken,
  getBlogsPageData,
  getCategorisData,
  getNewestBlogs,
  getTagsData,
  getLastBlog,
  getBlogsListData,
  getBlogById,
};
