import { styled } from "linaria/lib/react";
export const SearchInput = styled.div`
  @apply flex h-12 w-full mb-5;
`;
export const SearchInputLeft = styled.div`
  @apply bg-blue-500 text-white text-xl flex items-center justify-center;
  width: 50px;
`;

export const Input = styled.input`
  @apply h-full flex-1 appearance-none  w-full py-2 px-3 text-gray-700 leading-tight text-sm;
  background: ${({ isBlack }) => (isBlack ? "rgba(0,0,0,.5)" : "white")};
  &:focus {
    @apply bg-white outline-none border-blue-500 text-black;
  }
  border: ${({ isBlack }) =>
    isBlack ? "none" : `1px solid ${theme`colors.gray.300`}`};
`;
export const SearchInputRight = styled.div`
  @apply bg-blue-500 text-white text-xl flex items-center justify-center cursor-pointer;
  width: 50px;
`;
export const SearchIcon = styled.i``;
// ${screen`md`} {
//     ${apply`mt-20 p-20`}
//   }
