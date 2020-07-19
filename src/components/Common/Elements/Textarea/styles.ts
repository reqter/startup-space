import { styled } from "linaria/lib/react";
export const Input = styled.textarea`
  @apply appearance-none border w-full py-2 px-4 text-gray-600 leading-tight  outline-none border border-gray-400;
  height: 120px;
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
