import { useState } from "react";

interface IImage extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  fallback: string;
  [k: string]: unknown;
}

const Image = (props) => {
  const { src, fallback } = props;
  const [imgUrl, setUrl] = useState(
    typeof src !== "string"
      ? fallback
        ? fallback
        : "https://www.do-touch.net/wp-content/themes/koji/assets/images/default-fallback-image.png"
      : src
  );

  function handleError() {
    if (fallback) setUrl(fallback);
    setUrl(
      "https://www.do-touch.net/wp-content/themes/koji/assets/images/default-fallback-image.png"
    );
  }
  return <img {...props} src={imgUrl} onError={handleError} />;
};

export default Image;
