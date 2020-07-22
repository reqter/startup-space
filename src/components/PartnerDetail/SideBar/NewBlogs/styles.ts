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

export const PopularItemWrapper = styled.div`
  @apply flex mb-5 cursor-pointer border-b border-gray-100 pb-3;
  &:first-child {
    margin-top: 30px;
  }
`;
export const Image = styled.img`
  height: 60px;
  width: 70px;
  border-radius: 5px;
  margin-inline-end: 20px;
`;
export const Text = styled.div`
  @apply text-sm;
`;
