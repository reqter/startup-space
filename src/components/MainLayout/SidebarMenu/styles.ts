import { styled } from "linaria/lib/react";
export const Content = styled.div`
  @apply fixed w-full h-full flex-col  items-center  bg-gray-100 top-0 left-0 z-50 hidden pt-6;
  @screen tab-port {
    @apply flex;
  }
`;

export const Header = styled.div`
  @apply w-full flex justify-between px-5 items-center;
`;
export const CloseIcon = styled.div`
  @apply cursor-pointer text-4xl;
`;
export const Logo = styled.img`
  @apply w-32 cursor-pointer;
`;

export const Menu = styled.ul`
  @apply flex justify-center flex-col w-full my-32;
`;
export const MenuItem = styled.li`
  @apply font-bold px-6 cursor-pointer text-center text-2xl py-5;
  color: ${({ selected }) =>
    selected ? theme`colors.white` : theme`colors.black`};
  background-color: ${({ selected }) =>
    selected ? theme`colors.blue.500` : `transparent`};
`;
export const Button = styled.button`
  @apply bg-blue-500 flex items-center justify-center text-white text-base font-bold py-2 px-4 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
  span {
    @apply text-2xl;
    padding-inline-end: 3px;
  }
`;

export const LocalesContainer = styled.div`
  @apply flex absolute justify-center items-center;
  bottom: 30px;
`;
export const LocaleItem = styled.div`
  @apply rounded border border-gray-100 mx-2 py-2 px-3 shadow;
  background: ${({ isCurrent }) =>
    isCurrent ? theme`colors.blue.500` : "transparent"};
  color: ${({ isCurrent }) =>
    isCurrent ? theme`colors.white` : theme`colors.black`};
`;
