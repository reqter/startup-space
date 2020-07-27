import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { GalleryWrapper } from "./styles";
import isServer from "utils/isServer";

const Gallery = ({ data = [] }) => {
  const { dir } = useGlobalState();
  const { includeImageBaseUrl } = useObjectPropsValue();
  const images = data.map((item) => {
    return {
      original: includeImageBaseUrl(item, "image", 1024, 700),
      thumbnail: includeImageBaseUrl(item, "image", 100, 100),
    };
  });
  return (
    <GalleryWrapper length={data.length}>
      {!isServer && data.length > 0 ? (
        <ImageGallery
          lazyLoad={true}
          items={images}
          showPlayButton={false}
          isRTL={dir === "rtl" ? true : false}
          showFullscreenButton={false}
        />
      ) : null}
    </GalleryWrapper>
  );
};
export default Gallery;
