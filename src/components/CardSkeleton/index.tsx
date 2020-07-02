const Loading = ({ colSpan = 2 }) => (
  <div
    className={`${
      colSpan === 3 ? "block-1-3" : "block-1-2"
    } block block--loading`}
  ></div>
);
export default Loading;
