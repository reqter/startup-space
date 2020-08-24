import React, { useState } from "react";
import dynamic from "next/dynamic";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";
import {
  Wrapper,
  Left,
  ImageLeft,
  Right,
  ImageRight,
  ShowGalleryBtn,
} from "./styles";
const Gallery = dynamic(() => import("components/Common/Gallery"), {
  ssr: false,
});

const HeaderImages = ({ data }) => {
  const [isShowAllPhotos, toggleAllPhotos] = useState(false);
  const [selectedIndex, setGalleryIndex] = useState(0);
  const { partnerDetailPage } = useGlobalState();
  const { getValue, includeImageBaseUrl } = useObjectPropsValue();
  if (!data || !data.length) {
    return null;
  }
  const pageData = partnerDetailPage ? partnerDetailPage[0] : {};
  const imageLeft = includeImageBaseUrl(data[0], "image", 1024, 420);
  const imageRight1 = includeImageBaseUrl(data[1], "image", 1024, 210);
  const imageRight2 = includeImageBaseUrl(data[2], "image", 1024, 210);
  const imageRight3 = includeImageBaseUrl(data[3], "image", 1024, 210);
  const imageRight4 = includeImageBaseUrl(data[4], "image", 1024, 210);

  function handleClickAllPhotos(index?: number) {
    setGalleryIndex(index ? index : 0);
    toggleAllPhotos(true);
  }
  function handleClosedGallery() {
    setGalleryIndex(0);
    toggleAllPhotos(false);
  }
  return (
    <Wrapper>
      <Left>
        <ImageLeft src={imageLeft} onClick={() => handleClickAllPhotos(0)} />
      </Left>
      <Right>
        <ImageRight src={imageRight1} onClick={() => handleClickAllPhotos(1)} />
        <ImageRight src={imageRight2} onClick={() => handleClickAllPhotos(2)} />
        <ImageRight src={imageRight3} onClick={() => handleClickAllPhotos(3)} />
        <ImageRight src={imageRight4} onClick={() => handleClickAllPhotos(4)} />
      </Right>
      <ShowGalleryBtn onClick={() => handleClickAllPhotos()}>
        {getValue(pageData, "showgallerytext")}
      </ShowGalleryBtn>
      {isShowAllPhotos ? (
        <Gallery
          data={data}
          startIndex={selectedIndex}
          onCloseClicked={handleClosedGallery}
        />
      ) : null}
    </Wrapper>
  );
};

export default HeaderImages;
