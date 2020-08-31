import { styled } from "linaria/lib/react";
export const SearchInput = styled.div`
  @apply flex-1 flex self-center absolute rounded overflow-hidden;
  border: 1px solid ${theme`colors.gray.300`};
  min-width: 400px;
  left: 180px;
  @screen tab-land {
    left: 160px;
    min-width: 350px;
  }
  @screen tab-port {
    min-width: 300px;
  }
  @screen phone {
    @apply hidden
  }
`;
export const Input = styled.input`
  @apply h-full flex-1 appearance-none  w-full py-2 px-3 text-gray-700 leading-tight text-sm bg-white;
  &:focus {
    @apply bg-white outline-none border-blue-500 text-black;
  }
`;
export const SearchInputRight = styled.div`
  @apply text-blue-500 text-2xl flex items-center justify-center cursor-pointer font-bold;
  width: 50px;
`;
