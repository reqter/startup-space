import useGlobalState from "hooks/useGlobal/useGlobalState";
import { formatDistanceStrict } from "date-fns";

const useDate = () => {
  const { currentLanguage } = useGlobalState();

  function dateFromNow(date: string | number | Date) {
    let lang = require(`date-fns/locale/${
      currentLanguage === "fa"
        ? `fa-IR`
        : currentLanguage === "en"
        ? `en-US`
        : currentLanguage
    }`).default;
    return formatDistanceStrict(new Date(date), new Date(), {
      locale: lang,
      addSuffix: true,
    });
  }

  return {
    dateFromNow,
  };
};
export default useDate;
