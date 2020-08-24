import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import { GalleryWrapper, CloseButton } from "./styles";
import isServer from "utils/isServer";

const Gallery = ({ data = [], startIndex = 0, onCloseClicked }) => {
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
          startIndex={startIndex}
        />
      ) : null}
      <CloseButton onClick={onCloseClicked}>
        <IoMdCloseCircleOutline />
      </CloseButton>
    </GalleryWrapper>
  );
};
export default Gallery;
