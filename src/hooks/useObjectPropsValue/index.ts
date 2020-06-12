import useGlobalState from "hooks/useGlobal/useGlobalState";

const useObjectPropsValue = () => {
  const { currentLanguage } = useGlobalState();
  const getValue = (
    object: object,
    key: string,
    defaultValue: string | number = ""
  ) => {
    const keys = key.split(".");
    // ["contact", "user", "name"];
    let val = object[keys[0]];
    if (keys.length > 1) {
      for (let i = 1; i < keys.length; i++) {
        if (keys[i] && keys[i].length) val = val[keys[i]];
      }
    }
    return val
      ? typeof val === "object"
        ? val[currentLanguage]
          ? val[currentLanguage]
          : Object.keys(val)[0] && Object.keys(val).length
          ? typeof val[Object.keys(val)[0]] !== "object"
            ? val[Object.keys(val)[0]]
            : defaultValue
          : defaultValue
        : val
      : defaultValue;
  };
  const thousandSeperator = (value: string | number, char: string = ",") => {
    return !value
      ? ""
      : value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${char}`);
  };

  return {
    getValue,
    thousandSeperator,
  };
};

export default useObjectPropsValue;
