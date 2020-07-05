import { styled } from "linaria/lib/react";

export const AddressContainer = styled.div`
  @apply flex flex-wrap;
`;
export const Row = styled.div`
  @apply w-1/2 mb-5;
`;
export const Key = styled.div`
  @apply text-sm text-gray-700;
`;
export const Value = styled.div`
  @apply text-lg font-semibold;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;