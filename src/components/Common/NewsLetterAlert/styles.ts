import { styled } from "linaria/lib/react";
export const AlertWrapper = styled.div`
  @apply flex flex-col justify-center items-center;
  width: 100%;
`;
export const Icon = styled.div`
  width: 55px;
  height: 55px;
  @apply rounded-full bg-green-500 mb-8 flex justify-center items-center text-white text-5xl;
`;
export const Title = styled.h2`
  @apply font-semibold text-2xl mb-3 text-center;
`;
export const Info = styled.span`
  @apply text-base mb-5 text-center;
`;

export const AlertButton = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-2 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
