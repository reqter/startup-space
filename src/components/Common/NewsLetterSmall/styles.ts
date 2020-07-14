import { styled } from "linaria/lib/react";

export const NewsLetterWrapper = styled.div`
  @apply bg-black border-b border-gray-800 border-solid;
`;
export const NewsLetterContent = styled.div`
  @apply bg-black max-w-6xl m-auto flex items-center h-40;
`;

export const Text = styled.h2`
  @apply text-white text-4xl flex-1 font-bold;
  margin-inline-end: 100px;
`;

export const InputWrapper = styled.form`
  @apply flex bg-red-400 overflow-hidden;
  width: 500px;
  height: 50px;
  border-start-start-radius: 30px;
  border-end-start-radius: 30px;
`;

export const Input = styled.input`
  @apply flex-1 px-5;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white px-5;
`;
