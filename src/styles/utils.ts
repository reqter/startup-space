export const breakpoints = {
  phone: 37.5,
  tabPort: 56.25,
  tabLand: 75,
  bigDesktop: 112.5
};

export const media = {
  phone: `@media only screen and (max-width: ${breakpoints.phone}em)`,
  tabPort: `@media only screen and (max-width: ${breakpoints.tabPort}em)`,
  tabLand: `@media only screen and (max-width: ${breakpoints.tabLand}em)`,
  bigDesktop: `@media only screen and (max-width: ${breakpoints.bigDesktop}em)`
};

// export const media = Object.keys(breakpoints).reduce((acc, item) => {
//   acc[item] = `@media only screen and (min-width: ${breakpoints[item]}px)`;
//   return acc;
// }, {});
