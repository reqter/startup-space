import { styled } from "linaria/lib/react";

export const Title = styled.div`
  @apply flex-1 font-semibold text-2xl mb-6;
`;
export const Description = styled.p`
  @apply text-lg mb-2;
`;

export const Button = styled.button`
  @apply flex-1 bg-blue-500 text-white text-sm font-bold py-3 px-6 rounded transition ease-in duration-200 mb-10;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
  &:first-child {
    @apply mie-5;
  }
`;

export const CommentsWrapper = styled.div`
  @apply mb-2;
`;
export const CommentWrapper = styled.div`
  @apply py-4;
`;
export const Top = styled.div`
  @apply flex items-center mb-3;
`;

export const Info = styled.div`
  @apply flex flex-col flex-1;
`;
export const Name = styled.div`
  @apply font-semibold;
`;
export const Date = styled.div`
  @apply text-xs mt-2;
`;
export const Text = styled.p`
  @apply text-sm text-gray-800;
`;

export const Form = styled.form``;
export const Row = styled.div`
  @apply flex mb-5;
`;

export const Column = styled.div`
  @apply flex-1;
  margin-inline-end: 10px;
  &:last-child {
    margin: 0;
  }
`;
export const LoadMore = styled.button`
  @apply bg-gray-200 w-full flex justify-center items-center mt-10 text-sm font-bold py-2 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-gray-300 transition ease-in duration-200;
  }
`;
