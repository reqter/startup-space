import { styled } from "linaria/lib/react";

export const Content = styled.div`
  @apply bg-white py-5 rounded-lg px-5 mb-5 shadow;
  min-height: 200px;
`;
export const Title = styled.h4`
  @apply font-semibold text-black text-xl mb-1 relative;
`;
export const Divider = styled.div`
  @apply bg-gray-200 w-full relative mt-2 mb-5;
  height: 2px;
  &:after {
    content: "";
    @apply absolute bg-blue-500 w-1/3 top-0;
    height: 2px;
    inset-inline-start: 0;
    z-index: 1;
  }
`;
