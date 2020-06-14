import { styled } from "linaria/lib/react";
import { rgba } from "polished";

export const Container = styled.div`
  @apply flex flex-1 flex-wrap pie-5;
`;

export const ImageBox = styled.div`
  @apply h-56 relative overflow-hidden;
`;
export const Image = styled.div`
  @apply h-56 h-full w-full z-10 bg-cover transition duration-500;
  background-image: ${({ src }) =>
    `linear-gradient(to right, ${rgba(theme`colors.black`, 0.4)},${rgba(
      theme`colors.black`,
      0.4
    )}),url(${src})`};
`;
export const Address = styled.div`
  @apply absolute z-30 text-white flex items-center;
  inset-block-start: 10px;
  inset-inline-start: 10px;
  height: 30px;
`;
export const Price = styled.div`
  @apply absolute right-0 bottom-0 z-30 text-white text-base font-semibold;
  inset-block-end: 10px;
  inset-inline-start: 10px;
  height: 30px;
`;
export const Name = styled.div`
  @apply p-5 font-medium text-xl;
`;
export const AmenitiesBox = styled.div`
  @apply flex border-t border-gray-200 py-3;
`;
export const AmenitName = styled.div`
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  margin-inline-start: 12px;
`;

export const CardWrapper = styled.a`
  @apply mb-4 rounded-lg cursor-pointer overflow-hidden bg-white  rounded-lg shadow;
  width: calc(${theme`width.1/2`} - 15px);
  margin-inline-end: 15px;
  min-height: 300px;
  &:hover {
    @apply shadow-xl;
    ${Image} {
      @apply transform scale-125 transition duration-500;
    }
  }
`;
