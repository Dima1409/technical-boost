const tablet = "768px";
const desktop = "1280px";
const theme = {
  mq: {
    mobileOnly: `@media screen and (max-width: ${tablet - 0.02}px)`,
    tablet: `@media screen and (min-width: ${tablet}px)`,
    desktop: `@media screen and (min-width: ${desktop}px)`,
  },
};
export default theme;
