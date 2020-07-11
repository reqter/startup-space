import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex  bg-white;
`;
export const FormBox = styled.form`
  @apply w-1/2 flex flex-col py-20 px-12;
`;
export const Header = styled.h1`
  @apply text-4xl font-bold;
`;
export const Description = styled.span``;
export const Input = styled.input`
  @apply appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight mt-8 border-2 border-solid;
  &:focus {
    @apply outline-none bg-white border-blue-500;
    border-color: ${({ hasError }) =>
      hasError ? theme`colors.red.500` : theme`colors.blue.500`};
  }
  border-color: ${({ hasError }) =>
    hasError ? theme`colors.red.500` : theme`colors.gray.400`};
`;
export const Button = styled.button`
  @apply self-start mt-10 bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;

export const ImageBox = styled.div`
  @apply w-1/2 bg-cover;
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
`;
