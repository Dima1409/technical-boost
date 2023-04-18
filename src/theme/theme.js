const tablet = "768px";
const desktop = "1280px";
const theme = {
  mq: {
    mobileOnly: `@media screen and (max-width: ${tablet - 0.02})`,
    tablet: `@media screen and (min-width: ${tablet})`,
    desktop: `@media screen and (min-width: ${desktop})`,
  },
};
export default theme;
