import { styled } from "linaria/lib/react";

export const InfoItemsContainer = styled.div`
  @apply flex;
`;
export const InfoItem = styled.div`
  @apply bg-white w-1/3 flex flex-col text-center justify-center items-center shadow rounded-lg px-10;
  height: 300px;
  margin-inline-end: 20px;
`;
export const Icon = styled.div`
  @apply text-blue-500 text-5xl;
`;

export const Title = styled.div`
  @apply font-bold text-2xl my-5;
`;
export const Description = styled.div`
  @apply text-sm;
`;
