import { styled } from "linaria/lib/react";

export const SingleValueText = styled.div`
  @apply text-sm;
`;

export const MultiValueText = styled.div``;
export const borderColor = theme`colors.blue.500`;

export const Option = styled.div`
  @apply text-sm font-bold p-2 cursor-pointer  border-b border-gray-100;
  &:hover {
    @apply bg-gray-100;
  }
`;
