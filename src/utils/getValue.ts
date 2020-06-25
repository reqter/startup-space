import { i18n } from "../../config/Next18Wrapper";
export default function getValue(
  object: object,
  key: string,
  defaultValue: string | number = ""
) {
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
      ? val[i18n.language]
        ? val[i18n.language]
        : defaultValue
      : val
    : defaultValue;
}
