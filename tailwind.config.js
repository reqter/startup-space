// purge: ["./src/components/**/*.{js,ts,jsx,tsx}"],
module.exports = {
  plugins: [require("tailwindcss-logical")],
  variants: {
    logical: ["responsive", "hover"],
  },
  theme: {
    screens: {
      phone: { max: "37.5em" },
      "tab-port": { max: "56.25em" },
      "tab-land": { max: "75em" },
      "big-desktop": { max: "112.5em" },
    },
    extend: {
      spacing: {
        "1150": "73.125rem",
      },
      fontFamily: {
        vazir: [
          "Vazir",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
};
