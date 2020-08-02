import useGlobalState from "hooks/useGlobal/useGlobalState";
import * as dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const useDate = () => {
  const { currentLanguage } = useGlobalState();
  function dateFromNow(d) {
    require(`dayjs/locale/${currentLanguage}`);
    // return dayjs(d).locale(currentLanguage).fromNow();
    return d;
  }
  return {
    dateFromNow,
  };
};
export default useDate;
