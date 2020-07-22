import { styled } from "linaria/lib/react";

export const Content = styled.div`
  @apply bg-white rounded-lg;
`;
export const Title = styled.h4`
  @apply font-semibold text-black text-2xl mb-1 relative mt-0;
`;
export const Divider = styled.div`
  @apply bg-gray-200 w-full relative mt-2 mb-5;
  height: 2px;
  &:after {
    content: "";
    @apply absolute bg-blue-500 w-1/3 top-0 z-10;
    height: 2px;
    inset-inline-start: 0;
  }
`;

export const Actions = styled.div`
  @apply flex flex-col mt-5;
`;
export const ActionsTitle = styled.h4`
  @apply;
`;

export const Button = styled.button`
  @apply flex-1 text-sm font-bold py-3 rounded transition ease-in duration-200;
  background-color: ${({ bgColor }) => {
    return bgColor === "blue" ? theme`colors.blue.500` : theme`colors.gray.300`;
  }};
  color: ${({ bgColor }) => {
    return bgColor === "blue" ? theme`colors.white` : theme`colors.black`;
  }};
  &:first-child {
    @apply mb-3;
  }
  &:hover {
    @apply transition ease-in duration-200 shadow-lg;
    background-color: ${({ bgColor }) => {
      return bgColor === "blue"
        ? theme`colors.blue.700`
        : theme`colors.gray.400`;
    }};
  }
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
  @apply flex items-center pb-3 mb-3 cursor-pointer;
  &:not(:last-child) {
    @apply border-b border-solid border-gray-100;
  }
  &:hover {
    ${Image} {
      @apply transition duration-500;
      transform: scale(1.5);
    }
  }
`;
