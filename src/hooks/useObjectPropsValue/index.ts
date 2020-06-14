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

    // return val
    //   ? typeof val === "object"
    //     ? val[currentLanguage]
    //       ? val[currentLanguage]
    //       : Object.keys(val)[0] && Object.keys(val).length
    //       ? typeof val[Object.keys(val)[0]] !== "object"
    //         ? val[Object.keys(val)[0]]
    //         : defaultValue
    //       : defaultValue
    //     : val
    //   : defaultValue;
  };
  const thousandSeperator = (value: string | number, char: string = ",") => {
    return !value
      ? ""
      : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${char}`);
  };

  const includeImageBaseUrl = (src: string): string => {
    if (src.startsWith("https://assets.reqter.com/asset/download/")) return src;
    return urls.assetsDownloadBaseUrl + src;
  };

  return {
    getValue,
    thousandSeperator,
    includeImageBaseUrl,
  };
};

export default useObjectPropsValue;
