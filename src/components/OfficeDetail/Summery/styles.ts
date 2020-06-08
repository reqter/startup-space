import { styled } from "linaria/lib/react";
export const SummeryWrapper = styled.div`
  @apply bg-white;
`;
export const Content = styled.div`
  @apply flex w-1150 m-auto py-10;
`;
export const Left = styled.div`
  @apply flex-1;
`;
export const Right = styled.div`
  @apply flex items-center flex-col;
`;
export const Name = styled.div`
  @apply font-semibold text-4xl;
`;
export const Location = styled.div`
  @apply flex h-10 items-center;
`;
export const Actions = styled.div`
  @apply flex items-center;
`;
export const BoxInfo = styled.a`
  @apply font-semibold border-dashed border border-gray-500 mx-3 flex  items-center justify-center px-4 rounded cursor-pointer;
  min-width: 60px;
  min-height: 40px;
`;

export const Website = styled.a`
  @apply text-lg text-blue-400  relative w-full mt-5;
`;
export const Link = styled.span`
  @apply absolute left-0 mx-3;
`;
