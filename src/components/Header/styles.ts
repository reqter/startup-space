import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";
import { currentTheme } from "./../../services/theming";

export const Wrapper = styled.header`
  @apply w-full bg-gray-100  shadow-md transition ease-linear duration-75 z-50;

  background-color: ${({ isSticky }) =>
    isSticky ? "white" : rgba(255, 255, 255, 0.1)};
  top: ${({ isSticky }) => (isSticky ? 0 : "auto")};
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  padding: ${({ isSticky }) =>
    isSticky ? theme`spacing.3` : theme`spacing.5`};
`;
export const Content = styled.div`
  @apply w-1150 m-auto h-full flex items-center;
`;
export const Logo = styled.img`
  @apply w-32;
`;
export const Menu = styled.ul`
  @apply flex-1 flex justify-center;
`;
export const MenuItem = styled.li`
  @apply font-bold px-6 cursor-pointer;
  color: ${({ selected, isSticky }) =>
    selected
      ? theme`colors.blue.500`
      : !isSticky
      ? theme`colors.white`
      : theme`colors.black`};
  &:hover {
    @apply text-blue-500 transition duration-300;
  }
`;

export const Button = styled.button`
  @apply bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
export const SearchIcon = styled.span``;
