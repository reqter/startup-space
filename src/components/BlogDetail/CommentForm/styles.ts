import { styled } from "linaria/lib/react";

export const Title = styled.div`
  @apply flex-1 font-semibold text-2xl mb-6;
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

export const CommentFormContainer = styled.form`
  @apply mt-10;
`;

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
