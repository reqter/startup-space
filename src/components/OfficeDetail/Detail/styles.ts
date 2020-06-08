import { styled } from "linaria/lib/react";

export const DetailContainer = styled.div`
  @apply flex flex-wrap;
`;
export const Row = styled.div`
  @apply w-1/2;
  &:not(:last-child) {
    @apply mb-5;
  }
`;
export const Key = styled.div`
  @apply text-sm text-gray-700;
`;
export const Value = styled.div`
  @apply text-lg font-semibold;
`;
