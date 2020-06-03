const withPlugins = require("next-compose-plugins");
const path = require("path");
const withCSS = require("@zeit/next-css");

const nextConfig = {
  typescript: {
    ignoreDevErrors: true,
  },
  webpack: (config, options) => {
    config.resolve.alias["components"] = path.join(
      __dirname,
      "./src/components"
    );
    config.resolve.alias["services"] = path.join(__dirname, "./src/services");
    config.resolve.alias["styles"] = path.join(__dirname, "./src/styles");
    config.resolve.alias["hooks"] = path.join(__dirname, "./src/hooks");

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        webpack: (config, options) => {
          config.module.rules.push({
            test: /\.js|.jsx|.tsx|ts$/,
            use: [
              {
                loader: "linaria/loader",
                options: {
                  sourceMap: process.env.NODE_ENV !== "production",
                },
              },
            ],
          });
          return config;
        },
      },
    ],
  ],
  nextConfig
);
// module.exports = withCSS({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.js|.jsx|.tsx|ts$/,
//       use: [
//         {
//           loader: "linaria/loader",
//           options: {
//             sourceMap: process.env.NODE_ENV !== "production",
//           },
//         },
//       ],
//     });
//
//     return config;
//   },
// });
