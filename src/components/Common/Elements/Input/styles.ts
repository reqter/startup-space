import { styled } from "linaria/lib/react";
export const Input = styled.input`
  @apply appearance-none w-full py-3 px-4 text-gray-600 leading-tight outline-none border border-gray-400;
  &:focus {
    border: ${({ hasError }) =>
      hasError
        ? `1px solid ${theme`colors.red.500`}`
        : `1px solid ${theme`colors.gray.400`}`};
  }
  border: ${({ hasError }) =>
    hasError
      ? `1px solid ${theme`colors.red.500`}`
      : `1px solid ${theme`colors.gray.400`}`};
`;
