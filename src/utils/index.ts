//turns an array of strings into a single string separated by a

export function concatenateStrings(...args: string[]) {
  return args.join(",");
}

enum DeviceSizes {
  phone = 37.5,
  tabPort = 56.25,
  tabLand = 75,
  largeDesktop = 112.5,
}
export const isPhone = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.phone) return true;
  return false;
};
export const isTabPort = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.tabPort) return true;
  return false;
};
export const isTabLand = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.tabLand) return true;
  return false;
};
export const isLargeDesktop = () => {
  const windowWidth = window.innerWidth;
  var style = window.getComputedStyle(document.documentElement);
  const fontSize = style.fontSize;
  const width = windowWidth / parseFloat(fontSize);
  if (width < DeviceSizes.largeDesktop) return true;
  return false;
};
