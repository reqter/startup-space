import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

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

export const AlertWrapper = styled.div`
  @apply flex flex-col justify-center items-center;
  width: 100%;
`;
export const Icon = styled.div`
  width: 55px;
  height: 55px;
  @apply rounded-full bg-green-500 mb-8 flex justify-center items-center text-white text-5xl;
`;
export const Title = styled.h2`
  @apply font-semibold text-2xl mb-3 text-center;
`;
export const Info = styled.span`
  @apply text-base mb-5 text-center;
`;

export const AlertButton = styled.button`
  @apply bg-blue-500 text-white text-sm font-bold py-2 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
