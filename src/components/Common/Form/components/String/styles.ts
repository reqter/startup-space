import { styled } from "linaria/lib/react";
export const Input = styled.input`
  @apply appearance-none border border-gray-500 w-full py-3 px-4 text-gray-600 leading-tight;
  &:focus {
    @apply shadow;
  }
`;
