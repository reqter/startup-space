import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Wrapper = styled.div`
  @apply bg-white py-20 px-24;
`;
export const Content = styled.div`
  @apply flex;
`;
export const Left = styled.div`
  @apply w-1/2 flex-shrink-0;
`;
export const Image = styled.img`
  @apply;
`;
export const Right = styled.div`
  @apply flex flex-col;
`;
export const Title = styled.div`
  @apply;
`;
export const Header = styled.h1`
  @apply text-4xl font-bold;
`;
export const Description = styled.p`
  @apply text-gray-600;
`;
export const Button = styled.button`
  @apply self-start mt-10 bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
