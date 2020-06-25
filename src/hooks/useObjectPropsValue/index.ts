import useGlobalState from "hooks/useGlobal/useGlobalState";
import { urls } from "utils/constants";
const useObjectPropsValue = () => {
  const { currentLanguage } = useGlobalState();
  const getValue = (
    object: object,
    key: string,
    defaultValue: string | number = ""
  ) => {
    if (!object) {
      return defaultValue;
    }
    const keys = key.split(".");
    let val = object[keys[0]];
    if (val) {
      if (keys.length > 1) {
        for (let i = 1; i < keys.length; i++) {
          if (keys[i] && keys[i].length && val && val[keys[i]])
            val = val[keys[i]];
        }
      }
    }
    return val
      ? Array.isArray(val)
        ? val
        : typeof val === "object"
        ? val[currentLanguage]
          ? val[currentLanguage]
          : defaultValue
        : val
      : defaultValue;
  };
  const thousandSeperator = (value: string | number, char: string = ",") => {
    return !value
      ? ""
      : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${char}`);
  };

  const includeImageBaseUrl = (
    src: string,
    type: string = "image",
    width?: string | number,
    height?: string | number
  ): string => {
    if (!src || !src.length) return;
    let url: string;
    if (type === "image") {
      if (src.startsWith(urls.assetsDownloadBaseUrl)) {
        src = src.replace(
          urls.assetsDownloadBaseUrl,
          urls.imageDownloadBaseUrl
        );
      }
      if (src.startsWith(urls.imageDownloadBaseUrl)) url = src;
      else url = urls.imageDownloadBaseUrl + src;
      if (width && height) {
        return (url = url + `?w=${width}&h=${height}`);
      }
      return url;
    } else {
      if (src.startsWith(urls.assetsDownloadBaseUrl)) url = src;
      else url = urls.assetsDownloadBaseUrl + src;
      return url;
    }
  };

  function objectToQuerystring(obj) {
    const newObj = Object.keys(obj).reduce((acc, key) => {
      if (obj[key] && obj[key].length) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
    return Object.keys(newObj).reduce((str, key, i) => {
      var delimiter, val;
      delimiter = i === 0 ? "?" : "&";
      if (obj[key]) {
        key = encodeURIComponent(key);
        val = encodeURIComponent(obj[key]);
        return [str, delimiter, key, "=", val].join("");
      }
      return [str].join("");
    }, "");
  }
  function getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  function urlParamsToObject(searchUrl?: string): object {
    if (!searchUrl) searchUrl = window.location.search;
    const urlParams = new URLSearchParams(searchUrl);
    return Object.fromEntries(urlParams);
  }

  function paramsToValidValueType(fields: any, paramsObject: any): object {
    return Object.keys(paramsObject).reduce((acc, key) => {
      const f = fields.find((field) => field.name === key);
      if (f) {
        if (f.isList) {
          if (paramsObject[key].includes(",")) {
            acc[key] = paramsObject[key].split(",");
          } else {
            acc[key] = [paramsObject[key]];
          }
        } else acc[key] = paramsObject[key];
      }
      return acc;
    }, {});
  }

  return {
    getValue,
    thousandSeperator,
    includeImageBaseUrl,
    objectToQuerystring,
    getParameterByName,
    urlParamsToObject,
    paramsToValidValueType,
  };
};

export default useObjectPropsValue;
