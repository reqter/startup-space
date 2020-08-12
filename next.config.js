const { withPlugins } = require("next-compose-plugins");
const path = require("path");
const withCSS = require("@zeit/next-css");
const withSvg = require("@svgr/webpack");

require("./scripts/generate-sitemap");
const nextConfig = {
  typescript: {
    ignoreDevErrors: true,
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
    [
      withSvg,
      {
        webpack: (config, options) => {
          config.module.rules.push({
            test: /\.svg$/,
            issuer: {
              test: /\.(js|jsx|ts|tsx)x?$/,
            },
            use: ["@svgr/webpack"],
          });
          return config;
        },
      },
    ],
  ],
  nextConfig
);
