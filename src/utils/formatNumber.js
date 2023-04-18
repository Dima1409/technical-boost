const formatNumber = (value) => {
  return value.toLocaleString("en", {
    useGrouping: true,
  });
};

export default formatNumber;
