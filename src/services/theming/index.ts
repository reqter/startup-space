import light from "./themes/light";
import dark from "./themes/dark";

let defaultTheme = light;

export let currentTheme = light;

export const setTheme = (themeName: string): void => {
  if (themeName === "light") currentTheme = light;
  else if (themeName === "dark") currentTheme = dark;
  else currentTheme = defaultTheme;
};
