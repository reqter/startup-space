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
const getOfficesData = async (
  skip: number,
  limit: number,
  filteredData: object = {},
  lang: string,
  token?: string
) => {
  let name: string = "";
  if (filteredData["name"]) {
    name = filteredData["name"];
    delete filteredData["name"];
  }
  const search = Object.keys(filteredData).reduce((acc, key) => {
    if (filteredData[key]) {
      acc["fields." + key] = filteredData[key];
    }
    return acc;
  }, {});
  const url = urls.offices + `?lang=${lang}&skip=${skip}&limit=${limit}`;
  return await fetcher(url)({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
    body: JSON.stringify({ search, name }),
  });
};
const getMostPopularPartners = async (
  skip: number,
  limit: number,
  lang: string,
  token?: string
) => {
  const url =
    urls.mostPopularPartners + `?lang=${lang}&skip=${skip}&limit=${limit}`;
  return await fetcher(url)({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
    body: JSON.stringify({}),
  });
};
const getCitiesData = async (lang: string, limit: number, token?: string) => {
  return await fetcher(
    urls.cities +
      `?lang=${lang}&limit=${limit}&loadrelations=false&sort=fields.showinlanding`
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
const getPartnersPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.partnersId +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getPartnerDetailById = async (
  id: string,
  lang: string,
  token?: string
) => {
  return await fetcher(urls.partnerDetailUrl + `?key=${id}&lang=${lang}`)({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getPartnerDetailPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.partnerDetailPage + `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getPartnerProducts = async (
  contentTypeId: string,
  partnerId: string,
  lang: string,
  token?: string
) => {
  return await fetcher(
    urls.listLeanUrl +
      `/${contentTypeId}?fields.partnerid=${partnerId}&lang=${lang}`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getPartnerComments = async (
  contentTypeId: string,
  lang: string,
  skip: string | number,
  limit: string | number,
  partnerId: string,
  token?: string
) => {
  return await fetcher(
    urls.listLeanUrl +
      `/${contentTypeId}?lang=${lang}&skip=${skip}&limit=${limit}&loadrelations=false&fields.objectid=${partnerId}`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};

const getFAQsPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.faqsPageGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getFAQsData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.faqsCollectionGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getContactUsPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl +
      "/" +
      urls.contactUsGuid +
      `?lang=${lang}&loadrelations=false`
  )({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (getLocalToken() || token),
    },
  });
};
const getNotFoundPageData = async (lang: string, token?: string) => {
  return await fetcher(
    urls.listLeanUrl + "/" + urls.url404 + `?lang=${lang}&loadrelations=false`
  )({
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
  partnerId: string,
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
      objectid: partnerId,
      email,
    }),
  });
};
////////////////////////////////////////
const useGlobalApi = () => {
  const {
    currentLanguage,
    token,
    searchFormContentType,
    partnersPageData,
    contactUsPageData,
    faqsPageData,
    faqsData,
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
  const getLanding = async () => {
    return await getLandingData(currentLanguage, token);
  };
  const _getPartnersPageData = () => {
    if (!partnersPageData)
      getPartnersPageData(currentLanguage, token).then((data) => {
        storeData("partnersPageData", data && data.length > 0 ? data[0] : {});
      });
    if (!searchFormContentType)
      getContentTypeById("5ec23fa17e1a5d001b2c16f4", token).then((data) => {
        const cType = data;
        if (cType) {
          cType.fields = cType.fields.sort(function (a, b) {
            return a.order - b.order;
          });
        }
        storeData("searchFormContentType", cType);
      });
  };
  const getOffices = (
    skip: number,
    limit: number,
    filteredData: object,
    onSuccess?: (d: object[]) => unknown
  ) => {
    getOfficesData(skip, limit, filteredData, currentLanguage, token).then(
      (data) => {
        if (onSuccess) onSuccess(data.data);
      }
    );
  };
  const getPopularOffices = (
    skip: number,
    limit: number,
    onSuccess?: (d: object[]) => unknown
  ) => {
    getMostPopularPartners(skip, limit, currentLanguage, token).then((data) => {
      storeData("landingOfficesData", data?.data);
      if (onSuccess) onSuccess(data.data);
    });
  };
  const getCities = async (limit: number) => {
    getCitiesData(currentLanguage, limit, token).then((data) => {
      storeData("citiesData", data);
    });
  };
  const getAgents = async (limit: number) => {
    getAgentsData(currentLanguage, limit, token).then((data) =>
      storeData("agentsData", data)
    );
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
  const _getPartnerProducts = (
    partnerId: string,
    onSuccess: (data: object[]) => unknown,
    onError: () => unknown
  ) => {
    getPartnerProducts(
      "5d36a6418e6e9a0017c28fd5",
      partnerId,
      currentLanguage,
      token
    )
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
  const _getPartnerComments = (
    skip: string | number,
    limit: string | number = 25,
    partnerId: string,
    onSuccess: (data: object[]) => unknown,
    onError: () => unknown
  ) => {
    getPartnerComments(
      urls.commentsCollectionGuid,
      currentLanguage,
      skip,
      limit,
      partnerId,
      token
    )
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

  const getHomeData = async (onSuccess?: () => void, onError?: () => void) => {
    try {
      let promisArray = [getLandingData(currentLanguage, token)];
      if (!searchFormContentType)
        promisArray.push(getContentTypeById("5ec23fa17e1a5d001b2c16f4", token));
      const result = await Promise.all(promisArray);
      const cType = result[1] ? result[1] : searchFormContentType;
      if (cType) {
        cType.fields = cType.fields.sort(function (a, b) {
          return a.order - b.order;
        });
      }
      dispatch({
        type: "SET_PAGE_DATA",
        payload: {
          landingData: result[0],
          searchFormContentType: cType,
        },
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onError) onError();
    }
  };
  const _getContactUsPageData = () => {
    if (!contactUsPageData) {
      getContactUsPageData(currentLanguage, token).then((data) => {
        storeData("contactUsPageData", data && data.length ? data[0] : null);
      });
    }
  };
  const _getFAQsPageData = () => {
    if (!faqsPageData) {
      getFAQsPageData(currentLanguage, token).then((data) => {
        storeData("faqsPageData", data && data.length ? data[0] : null);
      });
    }
  };
  const _getFAQsData = () => {
    if (!faqsData) {
      getFAQsData(currentLanguage, token).then((data) => {
        storeData(
          "faqsData",
          data.sort(function (a, b) {
            return a.index - b.index;
          })
        );
      });
    }
  };
  const _addReview = (name, email, body, partnerId, onSuccess, onError) => {
    addReview(name, email, body, partnerId, token)
      .then(() => {
        onSuccess();
      })
      .catch(() => onError && onError());
  };
  const _subscribe = (email, onSuccess, onError) => {
    return fetcher(urls.subscribeUrl)({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        email,
        name: email,
      }),
    })
      .then((result) => onSuccess && onSuccess())
      .catch((error) => onError && onError());
  };
  const _addContactUs = (
    name,
    email,
    phonenumber,
    subject,
    message,
    onSuccess,
    onError
  ) => {
    return fetcher(urls.contactUsUrl)({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name,
        message,
        subject,
        phonenumber,
        contacttime: "",
        zipcode: "",
        email,
      }),
    })
      .then((result) => onSuccess && onSuccess())
      .catch((error) => onError && onError());
  };
  const _getNewOffices = (onSuccess, onError) => {
    const url = urls.newPartnersUrl + `?lang=${currentLanguage}&limit=3&skip=0`;
    return fetcher(url)({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    })
      .then((result) => onSuccess && onSuccess(result.data))
      .catch((error) => onError && onError());
  };
  const _getAppLocales = (onSuccess, onError) => {
    return fetcher(urls.locales)({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    })
      .then((result) => onSuccess && onSuccess(result ? result.data : []))
      .catch((error) => onError && onError(error));
  };
  return {
    getData,
    getLanding,
    getOffices,
    getCities,
    getAgents,
    getHomeData,
    getDataByCtypeId,
    getPopularOffices,
    _getPartnersPageData,
    _getPartnerProducts,
    _getPartnerComments,
    _getContactUsPageData,
    _getFAQsPageData,
    _getFAQsData,
    _addReview,
    _subscribe,
    _addContactUs,
    _getNewOffices,
    _getAppLocales,
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
  getFooterData,
  getContentTypeById,
  getPartnersPageData,
  getPartnerDetailById,
  getPartnerDetailPageData,
  getFAQsPageData,
  getFAQsData,
  getContactUsPageData,
  getNotFoundPageData,
};
