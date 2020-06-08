import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useGlobalState from "../../hooks/useGlobal/useGlobalState";
import { GalleryWrapper } from "./styles";

const images = [
  {
    original:
      "https://threesixtyparkavesouth.com/wp-content/themes/threesixty/_content/home/slideshow/slider-01.jpg",
    thumbnail:
      "https://threesixtyparkavesouth.com/wp-content/themes/threesixty/_content/home/slideshow/slider-01.jpg",
  },
  {
    original:
      "https://startupiranianir-4870.ov2.com/content/startupiranianir_4870_ov2_com/wp-content_156/uploads/2019/10/WhatsApp-Image-2019-10-29-at-10.12.22.jpeg",
    thumbnail:
      "https://startupiranianir-4870.ov2.com/content/startupiranianir_4870_ov2_com/wp-content_156/uploads/2019/10/WhatsApp-Image-2019-10-29-at-10.12.22.jpeg",
  },
  {
    original:
      "https://www.nima.today/wp-content/uploads/2019/04/%D9%BE%D8%A7%D8%B1%D8%A7%D8%AF%D8%A7%DB%8C%D8%B3%E2%80%8C%D9%87%D8%A7%D8%A8-700x350.jpg",
    thumbnail:
      "https://www.nima.today/wp-content/uploads/2019/04/%D9%BE%D8%A7%D8%B1%D8%A7%D8%AF%D8%A7%DB%8C%D8%B3%E2%80%8C%D9%87%D8%A7%D8%A8-700x350.jpg",
  },
  {
    original:
      "https://techrasa.com/fa/wp-content/uploads/2019/03/%D9%BE%D8%A7%D8%B1%D8%A7%D8%AF%D8%A7%DB%8C%D8%B3%E2%80%8C%D9%87%D8%A7%D8%A8.jpg",
    thumbnail:
      "https://techrasa.com/fa/wp-content/uploads/2019/03/%D9%BE%D8%A7%D8%B1%D8%A7%D8%AF%D8%A7%DB%8C%D8%B3%E2%80%8C%D9%87%D8%A7%D8%A8.jpg",
  },
];

const Gallery = () => {
  const { dir } = useGlobalState();
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
