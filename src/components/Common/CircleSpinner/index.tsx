const CircleSpinner = (props) => {
  const classNames =
    "circeSpinnerLoader " +
    (props.size === "small"
      ? "smallCircleSpinner"
      : props.size === "medium"
      ? "mediumCircleSpinner"
      : props.size === "large"
      ? "largeCircleSpinner"
      : "smallCircleSpinner");
  return (
    <div
      style={{
        borderColor: props.bgColor || "white",
        borderTopColor: props.color || "transparent",
      }}
      className={classNames}
    />
  );
};
export default CircleSpinner;
