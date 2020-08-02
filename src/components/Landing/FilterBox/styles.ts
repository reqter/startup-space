import { styled } from "linaria/lib/react";

export const Wrapper = styled.div`
  @apply w-full my-5;
`;
export const Content = styled.div`
  @apply flex flex-col;
`;

export const Actions = styled.div`
  @apply flex items-center pt-3;
`;
export const ActionsTitle = styled.h4`
  @apply mt-8 text-white;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-4 px-10 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
