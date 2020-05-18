import { styled } from "linaria/lib/react";

export const InputWrapper = styled.div`
  @apply flex items-center mb-5;
`;
export const Icon = styled.div``;
export const Title = styled.label`
  @apply mie-5 font-bold w-1/2 text-sm;
`;
export const Element = styled.input`
  @apply border w-full appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight;
  &:focus {
    @apply outline-none shadow-outline;
  }
`;
