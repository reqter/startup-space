import { styled } from "linaria/lib/react";
export const GalleryWrapper = styled.div`
  @apply fixed h-screen w-full z-50 top-0 bottom-0 left-0 bg-black pb-5;
  img {
    object-fit: contain !important;
    height: 100%;
  }
`;

export const CloseButton = styled.div`
  @apply text-white absolute text-3xl cursor-pointer;
  right: 20px;
  top: 20px;
`;
