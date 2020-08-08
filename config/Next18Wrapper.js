/* eslint-disable @typescript-eslint/no-var-requires */

var locales = require("./locales");
var NextI18Next = require("next-i18next").default;

var NextI18NextInstance = new NextI18Next({
  defaultLanguage: "fa",
  otherLanguages: Object.keys(locales),
  localeSubpaths: locales,
  // official i18next config: https://www.i18next.com/overview/configuration-options
  // react: {
  //   wait: true,
  // },
  defaultNS: "common",
  // ns: "common",
  detection: {
    lookupFromPathIndex: 0,
    load: "languageOnly",
    order: ["path", "navigator", "cookie", "header"],
  },
});

module.exports = NextI18NextInstance;
