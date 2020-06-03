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
  @apply flex items-center;
`;
export const Name = styled.div`
  @apply font-semibold text-4xl;
`;
export const Location = styled.div`
  @apply flex h-10 items-center;
`;
export const BoxInfo = styled.div`
  @apply font-semibold border-dashed border border-gray-500 mx-3 flex  items-center justify-center px-4 rounded;
  min-width: 60px;
  min-height: 40px;
`;
export const PriceBox = styled.div``;
export const PriceValue = styled.div`
  @apply font-semibold text-lg;
`;
export const PricePer = styled.div`
  @apply text-base text-gray-600;
`;
