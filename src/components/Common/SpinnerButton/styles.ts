import { styled } from "linaria/lib/react";

export const Button = styled.button`
  @apply flex-1 bg-blue-500 text-white text-sm font-bold py-3 px-6 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
