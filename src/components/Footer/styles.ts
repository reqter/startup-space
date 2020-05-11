import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Container = styled.div`
  @apply flex relative mb-20 mli-2;
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
  @apply text-center  mt-20 text-white absolute left-0 right-0;
  bottom: 20px;
`;
