import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { clientid, urls } from "../../utils/constants";
import {
  makeDataParam,
  makeSearchFields,
} from "../../utils/makeGetDataUrlParams";
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

export const useHeaderApi = () => {
  const token = "";
  const { data, error } = useSWR(
    "headerData",
    fetcher({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    }),
    {
      initialData: {},
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

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

const getHeaderData = async (lang: string) => {
  return await fetcher(urls.header + `?lang=${lang}&loadrelations=false`)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getLocalToken(),
    },
  });
};
const getLandingData = async (lang: string, token?: string) => {
  return await fetcher(urls.landing + `?lang=${lang}&loadrelations=false`)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getOfficesData = async (lang: string, limit: number, token?: string) => {
  return await fetcher(
    urls.offices + `?lang=${lang}&limit=${limit}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getCitiesData = async (lang: string, limit: number, token?: string) => {
  return await fetcher(
    urls.cities + `?lang=${lang}&limit=${limit}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getAgentsData = async (lang: string, limit: number, token?: string) => {
  return await fetcher(
    urls.agents + `?lang=${lang}&limit=${limit}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getBlogsData = async (lang: string, limit: number, token?: string) => {
  return await fetcher(
    urls.blogs + `?lang=${lang}&limit=${limit}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getFooterData = async (lang: string) => {
  return await fetcher(urls.footer + `?lang=${lang}&loadrelations=false`)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getLocalToken(),
    },
  });
};
const getData = async (contentTypeId: string, lang: string, token?: string) => {
  return await fetcher(
    urls.getDataUrl + `/${contentTypeId}?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getContentTypeById = async (id: string, token?: string) => {
  return await fetch(
    "https://adminapi.reqter.com" + urls.contentType + `?id=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + (getLocalToken() || token),
        spaceId: clientid,
      },
    }
  ).then((res) => res.json());
};

const useGlobalApi = () => {
  const { currentLanguage, token, searchFormContentType } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const storeData = (key, value) =>
    dispatch({
      type: "SET_DATA",
      payload: {
        name: key,
        value,
      },
    });
  const getLanding = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getOffices = async (limit: number) => {
    getOfficesData(currentLanguage, limit, token).then((data) =>
      storeData("officesData", data)
    );
  };
  const getCities = async (limit: number) => {
    getCitiesData(currentLanguage, limit, token).then((data) =>
      storeData("citiesData", data)
    );
  };
  const getAgents = async (limit: number) => {
    getAgentsData(currentLanguage, limit, token).then((data) =>
      storeData("agentsData", data)
    );
  };
  const getBlogs = async (limit: number) => {
    getBlogsData(currentLanguage, limit, token).then((data) => {
      storeData("blogsData", data);
    });
  };
  const getDataByCtypeId = async (
    ctypeId: string,
    storeName: string,
    onSuccess: (data: object[]) => {},
    onError: () => {}
  ) => {
    getData(ctypeId, currentLanguage, token)
      .then((data) => {
        storeData(storeName, data);
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
  const getHomeData = async (onSuccess?: () => void, onError?: () => void) => {
    try {
      let promisArray = [getLandingData(currentLanguage, token)];
      if (!searchFormContentType)
        promisArray.push(getContentTypeById("5ec23fa17e1a5d001b2c16f4", token));
      const result = await Promise.all(promisArray);
      dispatch({
        type: "SET_PAGE_DATA",
        payload: {
          landingData: result[0],
          searchFormContentType: result[1] ? result[1] : searchFormContentType,
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.log(error);
      if (onError) onError();
    }
  };
  return {
    getData,
    getLanding,
    getOffices,
    getCities,
    getAgents,
    getBlogs,
    getHomeData,
    getDataByCtypeId,
  };
};
export default useGlobalApi;

export {
  getToken,
  getHeaderData,
  getLandingData,
  getOfficesData,
  getCitiesData,
  getAgentsData,
  getBlogsData,
  getFooterData,
  getContentTypeById,
};
