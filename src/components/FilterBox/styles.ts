import { styled } from "linaria/lib/react";

export const Wrapper = styled.div`
  @apply shadow rounded-lg p-2 w-10/12;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const Content = styled.div`
  @apply bg-white py-10 rounded-lg px-10;
`;

export const Actions = styled.div`
  @apply flex items-center pt-5;
`;

export const Button = styled.button`
  @apply flex-1 bg-blue-500 text-white text-sm font-bold py-2 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
  &:first-child {
    @apply mie-5;
  }
`;
// ${screen`md`} {
//     ${apply`mt-20 p-20`}
//   }
