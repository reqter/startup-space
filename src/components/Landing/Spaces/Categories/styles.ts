import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const List = styled.div`
  @apply flex mt-8 mis-4;
`;

export const Item = styled.div`
  @apply py-2 px-4 rounded text-sm cursor-pointer transition duration-500;

  background-color: ${({ selected }) =>
    selected ? theme`colors.blue.500` : theme`bg-transparent`};
  color: ${({ selected }) =>
    selected ? theme`colors.white` : theme`colors.gray.600`};

  &:hover {
    color: ${({ selected }) =>
      !selected ? theme`colors.blue.500` : theme`colors.white`};
  }
`;
