import useGlobalState from "hooks/useGlobal/useGlobalState";
import { formatDistanceStrict } from "date-fns";
import { enUS, faIR, de, es, fr, it, sv } from "date-fns/locale";

const useDate = () => {
  const { currentLanguage } = useGlobalState();
  function getLocale(lng: string) {
    return lng === "fa"
      ? faIR
      : lng === "en"
      ? enUS
      : lng === "de"
      ? de
      : lng === "es"
      ? es
      : lng === "fr"
      ? fr
      : lng === "it"
      ? it
      : lng === "ar"
      ? faIR
      : lng === "sv"
      ? sv
      : faIR;
  }
  function dateFromNow(date: string) {
    try {
      if (date && typeof date === "string") {
        const d1 = new Date(date);
        if (d1) {
          const d = formatDistanceStrict(d1, new Date(), {
            locale: getLocale(currentLanguage),
            addSuffix: true,
          });
          console.log(d);
          return d;
        }
      }
    } catch (error) {
      console.log(error)
    }

    return date;
  }

  return {
    dateFromNow,
  };
};
export default useDate;
