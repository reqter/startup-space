import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Container = styled.div`
  @apply flex relative mb-16 mli-2;
`;

export const Box = styled.div`
  @apply flex flex-col flex-1 text-white pie-5 text-gray-300;
  ul {
    @apply list-disc;
    padding-inline-start: 15px;
    li {
      @apply py-2;
    }
  }
`;
export const Title = styled.div`
  @apply text-white text-2xl font-bold text-white;
`;
export const Divider = styled.div`
  @apply bg-gray-800 w-1/2 relative mt-2 mb-4;
  height: 2px;
  &:after {
    content: "";
    @apply absolute bg-blue-500 w-1/3 top-0 z-50;
    height: 2px;
    inset-inline-start: 0;
  }
`;

export const CopyRight = styled.div`
  @apply text-center  text-white absolute left-0 right-0;
  bottom: 20px;
`;

export const ImageContainer = styled.div`
  @apply rounded-lg overflow-hidden;
  height: 60px;
  width: 70px;
  margin-inline-end: 10px;
`;
export const Image = styled.img`
  @apply relative bg-cover rounded-lg h-full w-full transition duration-500 flex-shrink-0;
  background-image: ${({ bgImage }) =>
    `url("https://library.kissclipart.com/20181001/bbq/kissclipart-workdar-coworking-space-clipart-coworking-a7a0512b3741f118.png")`};
`;
export const FeatureContent = styled.div`
  @apply flex flex-col;
`;
export const Name = styled.h3`
  @apply text-sm m-0 p-0;
`;
export const Location = styled.h5`
  @apply text-xs m-0 p-0;
`;

export const FeatureItem = styled.div`
  @apply flex items-center pb-3 mb-3 cursor-pointer;
  &:not(:last-child) {
    @apply border-b border-solid border-gray-800;
  }
  &:hover {
    ${Image} {
      @apply transition duration-500;
      transform: scale(1.5);
    }
  }
`;
