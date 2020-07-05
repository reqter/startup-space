import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex flex-wrap;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-3 rounded transition ease-in duration-200 m-auto mt-5;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
  width: 300px;
`;