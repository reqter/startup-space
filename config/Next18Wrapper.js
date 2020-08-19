/* eslint-disable @typescript-eslint/no-var-requires */

var locales = require("./locales");
var NextI18Next = require("next-i18next").default;
const localesKeys = Object.keys(locales);
var subPaths = localesKeys.reduce((acc, item) => {
  acc[item] = item;
  return acc;
}, {});

var NextI18NextInstance = new NextI18Next({
  defaultLanguage: "fa",
  otherLanguages: localesKeys,
  localeSubpaths: subPaths,
  // official i18next config: https://www.i18next.com/overview/configuration-options
  // react: {
  //   wait: true,
  // },
  defaultNS: "common",
  // ns: "common",
  detection: {
    lookupFromPathIndex: 0,
    load: "languageOnly",
    order: ["cookie"],
  },
});

module.exports = NextI18NextInstance;
