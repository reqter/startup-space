import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";
export const Button = styled.button`
  @apply self-center mt-10 bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
