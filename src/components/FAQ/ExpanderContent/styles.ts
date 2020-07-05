import { styled } from "linaria/lib/react";

export const ExpanderContainer = styled.div`
  @apply flex flex-wrap items-start;
`;
export const ExpanderItemConatiner = styled.div`
  @apply bg-gray-100 flex flex-col mb-4 w-1/2;
  background: whitesmoke;
  &:nth-child(n + 1) {
    width: calc(50% - 10px);
    margin-inline-end: 10px;
  }
`;

export const Top = styled.div`
  @apply flex justify-between p-3 cursor-pointer shadow items-center;
`;

export const Title = styled.h2`
  @apply font-semibold text-base;
`;

export const Description = styled.p`
  @apply px-5 py-6;
`;
