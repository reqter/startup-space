import useSWR from "swr";
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

const useGlobalApi = () => {
  const { currentLanguage, token } = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const getLanding = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getOffices = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getCities = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getAgents = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getBlogs = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const getHomeData = async (onSuccess: () => void, onError: () => void) => {
    try {
      const [
        landingData,
        officesData,
        citiesData,
        agentsData,
        blogsData,
      ] = await Promise.all([
        getLandingData(currentLanguage, token),
        getOfficesData(currentLanguage, 4, token),
        getCitiesData(currentLanguage, 4, token),
        getAgentsData(currentLanguage, 3, token),
        getBlogsData(currentLanguage, 3, token),
      ]);
      dispatch({
        type: "SET_PAGE_DATA",
        payload: {
          landingData,
          officesData,
          citiesData,
          agentsData,
          blogsData,
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError();
    }
  };
  return {
    getLanding,
    getOffices,
    getCities,
    getAgents,
    getBlogs,
    getHomeData,
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
};
