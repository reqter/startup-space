import { styled } from "linaria/lib/react";

export const ExpanderContainer = styled.div``;
export const ExpanderItemConatiner = styled.div`
  @apply bg-gray-100 flex flex-col mb-4;
  background: whitesmoke;
`;

export const Top = styled.div`
  @apply flex justify-between p-5 cursor-pointer shadow items-center;
`;

export const Title = styled.h2`
  @apply font-semibold text-xl;
`;

export const Description = styled.p`
  @apply px-5 py-6;
`;
