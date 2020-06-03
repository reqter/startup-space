// const postcssLogical = require("postcss-logical");
// const tailwindcss = require("tailwindcss");
// const postCssPreset = require("postcss-preset-env");
//
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-logical"),
    require("postcss-dir-pseudo-class"),
    require("postcss-preset-env"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
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
