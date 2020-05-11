const postcssLogical = require("postcss-logical");
// const tailwindcss = require("tailwindcss");
// const postCssPreset = require("postcss-preset-env");
//
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-logical"),
    require("postcss-dir-pseudo-class"),
    require("postcss-preset-env")
  ]
};
// ...(process.env.NODE_ENV === `production`
//   ? {
//       "@fullhuman/postcss-purgecss": {
//         content: [`./src/**/*.*`],
//         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//       },
//       autoprefixer: {}
//     }
//   : undefined)
