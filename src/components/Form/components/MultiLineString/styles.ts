import { styled } from "linaria/lib/react";
export const Input = styled.textarea`
  @apply appearance-none border border-gray-500  w-full py-2 px-4 text-gray-600 leading-tight;
  height: 150px;
  &:focus {
    @apply shadow;
  }
`;
