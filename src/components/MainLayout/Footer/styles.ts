import { styled } from "linaria/lib/react";
import { css } from "linaria";

export const Container = styled.div`
  @apply flex relative mb-24 mli-2 flex-row flex-wrap;
  @screen phone {
    @apply flex-col;
  }
`;

export const Box = styled.div`
  @apply flex flex-col flex-1 text-white pie-5 text-gray-300;
  &:nth-child(2) {
    flex: 1.5;
  }
  ul {
    @apply list-disc;
    padding-inline-start: 15px;
    li {
      @apply py-2;
    }
  }
  @screen tab-port {
    @apply flex-none w-1/2;
  }
  @screen phone {
    @apply flex-none w-full mb-5;
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
  @apply text-center text-white absolute left-0 bottom-0 right-0 border-t border-gray-800 flex justify-center items-center;
  height: 100px;
`;
export const SocialContainer = styled.div`
  @apply flex text-white;
`;
export const SocialLink = styled.a``;
export const socialIconStyle = css`
  margin-inline-end: 10px;
  font-size: 22px;
  color: ${theme`colors.white`};
`;

export const ImageContainer = styled.div`
  @apply rounded-lg overflow-hidden flex-shrink-0;
  height: 60px;
  width: 70px;
  margin-inline-end: 10px;
`;
export const Image = styled.div`
  @apply relative bg-cover rounded-lg h-full w-full transition duration-500 flex-shrink-0;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  height: 60px;
  width: 70px;
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

export const FeatureItem = styled.a`
  @apply flex items-center pb-3 mb-3 cursor-pointer w-11/12;
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
