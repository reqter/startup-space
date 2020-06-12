import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import { urls } from "utils/constants";
import { GalleryWrapper } from "./styles";

const Gallery = ({ data = [] }) => {
  const { dir } = useGlobalState();
  const images = data.map((item) => {
    return {
      original: item,
      thumbnail: item,
    };
  });
  return (
    <GalleryWrapper>
      <ImageGallery
        items={images}
        showPlayButton={false}
        isRTL={dir === "rtl" ? true : false}
      />
    </GalleryWrapper>
  );
};
export default Gallery;
