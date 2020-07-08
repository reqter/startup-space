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
    urls.blogs + `?lang=${lang}&limit=${1}&loadrelations=false`
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
      categoryId ? "&categoryid=" + categoryId : ""
    }${tags ? "&tags=" + tags : ""}&loadrelations=false`;
  return await fetcher(url)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
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
  return {
    _getBlogsPageData,
    _getCategoriesData,
    _getNewestBlogs,
    _getTagsData,
    _getLastBlog,
    _getBlogsList,
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
};
