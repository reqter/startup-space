import { styled } from "linaria/lib/react";

export const ExpanderContainer = styled.div`
  @apply flex flex-wrap items-start content-start;
  min-height: 20 0px;
`;
export const ExpanderItemContainer = styled.div`
  @apply bg-gray-100 flex flex-col mb-4 w-1/2;
  background: whitesmoke;
  &:nth-child(n + 1) {
    width: calc(50% - 30px);
    margin-inline-end: 30px;
  }
`;

export const Top = styled.div`
  @apply flex justify-between p-3 cursor-pointer shadow items-center;
`;

export const Title = styled.h2`
  @apply font-semibold text-sm;
`;

export const Description = styled.p`
  @apply px-5 py-6;
`;

export const LoadingContent = styled.div`
  @apply bg-gray-100 p-3 rounded mb-2;
  margin-inline-end: 10px;
  width: calc(50% - 10px);
`;

export const LoadingText = styled.div`
  @apply bg-gray-200 rounded-lg h-8;
`;
