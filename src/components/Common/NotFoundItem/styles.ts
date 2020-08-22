import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex flex-col items-center justify-center mt-20;
`;
export const Image = styled.img`
  @apply;
  width: 200px;
  height: 200px;
`;
export const Title = styled.h1`
  @apply text-2xl my-3;
`;
export const Description = styled.h5`
  @apply text-sm text-gray-700;
`;
export const Button = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-3 rounded transition ease-in duration-200 m-auto mt-5 border border-gray-300;
  &:hover {
    @apply bg-blue-600 transition ease-in duration-200;
  }
  min-width: 100px;
`;
