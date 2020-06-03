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
      "https://lh3.googleusercontent.com/proxy/1ns3J5EXFYVUtWvlGCwu3U-b6s9a91RG4N7E0rEQIE9ih2dq1aRFl9Da8f1mhXBmD1BcDSZdlFjchLt-Do-ULe1kf8ybKvvfGvTfQ__EWStZRokI87I-qpLW3q0IJQHmmDZ9qsy5F53QDkFMRppt",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/1ns3J5EXFYVUtWvlGCwu3U-b6s9a91RG4N7E0rEQIE9ih2dq1aRFl9Da8f1mhXBmD1BcDSZdlFjchLt-Do-ULe1kf8ybKvvfGvTfQ__EWStZRokI87I-qpLW3q0IJQHmmDZ9qsy5F53QDkFMRppt",
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
