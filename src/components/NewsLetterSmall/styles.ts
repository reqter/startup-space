import { styled } from "linaria/lib/react";

export const NewsLetterWrapper = styled.div`
  @apply bg-black border-b border-gray-800 border-solid;
`;
export const NewsLetterContent = styled.div`
  @apply bg-black w-1150 m-auto flex items-center h-40;
`;

export const Text = styled.h2`
  @apply text-white text-4xl flex-1 font-bold;
  margin-inline-end: 100px;
`;

export const InputWrapper = styled.div`
  @apply flex bg-red-400;
  width: 500px;
  height: 50px;
  border-top-left-radius: 10px;
`;

export const Input = styled.input`
  @apply flex-1 px-3;
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white px-5;
`;
