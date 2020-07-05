import { styled } from "linaria/lib/react";

export const Content = styled.div`
  @apply bg-white rounded-lg;
`;
export const Title = styled.h4`
  @apply font-semibold text-black text-2xl mb-1 relative mt-0;
`;
export const Divider = styled.div`
  @apply bg-gray-200 w-full relative mt-2 mb-5;
  height: 2px;
  &:after {
    content: "";
    @apply absolute bg-blue-500 w-1/3 top-0 z-10;
    height: 2px;
    inset-inline-start: 0;
  }
`;

export const Actions = styled.div`
  @apply flex flex-col mt-5;
`;
export const ActionsTitle = styled.h4`
  @apply;
`;

export const Button = styled.button`
  @apply flex-1 text-sm font-bold py-3 rounded transition ease-in duration-200;
  background-color: ${({ bgColor }) => {
    return bgColor === "blue" ? theme`colors.blue.500` : theme`colors.gray.300`;
  }};
  color: ${({ bgColor }) => {
    return bgColor === "blue" ? theme`colors.white` : theme`colors.black`;
  }};
  &:first-child {
    @apply mb-3;
  }
  &:hover {
    @apply transition ease-in duration-200 shadow-lg;
    background-color: ${({ bgColor }) => {
      return bgColor === "blue"
        ? theme`colors.blue.700`
        : theme`colors.gray.400`;
    }};
  }
`;
