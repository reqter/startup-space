import { styled } from "linaria/lib/react";
import { css } from "linaria";
export const Wrapper = styled.header`
  min-height: 50px;

  @apply w-full bg-gray-100  shadow-md transition ease-linear duration-75 z-50;
  background-color: ${({ isSticky, isTransparent }) =>
    !isTransparent ? theme`colors.white` : isSticky ? "white" : `transparent`};
  top: 0;
  position: fixed;
  padding: ${({ isSticky }) =>
    isSticky ? theme`spacing.3` : theme`spacing.5`};

  @screen tab-port {
    @apply bg-white p-5 fixed w-full shadow-md transition ease-linear duration-75 z-50;
  }
`;
export const Content = styled.div`
  @apply max-w-6xl m-auto h-full flex items-center;
`;
export const Logo = styled.img`
  @apply w-32 cursor-pointer;
  @screen tab-port {
    @apply hidden;
  }
`;
export const CenterLogo = styled.img`
  @apply w-24 absolute hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @screen tab-port {
    @apply block;
  }
`;
export const menuIcon = css`
  font-size: 30px;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`;
export const Menu = styled.ul`
  @apply flex-1 flex justify-center;
  @screen tab-port {
    @apply hidden;
  }
`;
export const MenuItem = styled.li`
  @apply font-bold px-6 cursor-pointer;
  color: ${({ selected, isSticky, isTransparent }) =>
    selected
      ? theme`colors.blue.500`
      : !isTransparent
      ? theme`colors.black`
      : !isSticky
      ? theme`colors.white`
      : theme`colors.black`};
  &:hover {
    @apply text-blue-500 transition duration-300;
  }
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
  @screen tab-port {
    @apply hidden;
  }
`;
export const SearchIcon = styled.span``;
