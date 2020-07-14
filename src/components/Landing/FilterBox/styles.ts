import { styled } from "linaria/lib/react";

export const Wrapper = styled.div`
  @apply shadow rounded-lg p-2 w-10/12;
  background-color: rgba(255, 255, 255, 0.2);
  @screen tab-port {
    @apply w-full;
  }
`;
export const Content = styled.div`
  @apply bg-white py-8 rounded-lg px-8;
`;

export const Actions = styled.div`
  @apply flex items-center pt-3;
`;
export const ActionsTitle = styled.h4`
  @apply mt-8;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-4 px-10 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
