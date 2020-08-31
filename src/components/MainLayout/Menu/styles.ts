import { styled } from "linaria/lib/react";
import { css } from "linaria";
export const Wrapper = styled.header`
  min-height: 50px;
  @apply w-full bg-gray-100  transition ease-linear duration-75 z-50 w-full;
  background-color: ${({ isSticky, isTransparent }) =>
    !isTransparent ? theme`colors.white` : isSticky ? "white" : `transparent`};
  top: 0;
  position: fixed;
  padding: ${({ isSticky }) =>
    isSticky ? theme`spacing.3` : theme`spacing.5`};

  @screen tab-port {
    @apply p-5 fixed w-full transition ease-linear duration-75 z-50 right-0;
  }
  @screen phone {
    @apply w-full px-3 py-3;
  }
`;
export const Content = styled.div`
  @apply max-w-6xl m-auto h-full flex items-center relative;
  height: 50px;
`;
export const Logo = styled.img`
  @apply w-32 cursor-pointer absolute left-0;
  @screen tab-port {
    @apply hidden;
  }
`;
export const PhoneMenuWrapper = styled.div`
  @apply justify-between w-full  items-center hidden;
  @screen tab-port {
    @apply flex;
  }
`;
export const CenterLogo = styled.img`
  @apply w-32;
  height: 50px;
  width: 100px;
  @screen tab-port {
    @apply block;
  }
`;
export const NavBarIcon = styled.div`
  @apply hidden text-4xl cursor-pointer rounded-full bg-white justify-center items-center;
  width: 50px;
  height: 50px;
  @screen tab-port {
    @apply flex;
  }
  @screen phone {
    @apply text-2xl;
    width: 40px;
    height: 40px;
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
export const ButtonsContainer = styled.div`
  @apply right-0 flex justify-between absolute items-center;
  @screen tab-port {
    @apply hidden;
  }
  min-width: ${({ isPartnerDetailPage }) =>
    isPartnerDetailPage ? "340px" : "205px"};
`;
export const Button = styled.button`
  @apply absolute flex items-center justify-center text-white text-sm font-bold py-2 px-4 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-600 transition ease-in duration-200;
  }
  right: ${({ name }) => (name === "partnersPanel" ? 0 : "135px")};
  background-color: ${({ name, isPartnerDetailPage }) =>
    name === "visit" ? theme`colors.blue.400` : theme`colors.blue.500`};
  min-width: 130px;
`;
export const Translations = styled.div`
  @apply bg-white rounded absolute left-0 border;
  &:hover {
    @apply bg-gray-100;
  }
`;
export const TranslationButton = styled.button`
  @apply flex text-gray-800 w-full justify-between items-center transition duration-300 py-2 px-4 rounded;
  &:focus {
    @apply outline-none;
  }
`;
export const LanguagesContainer = styled.div`
  @apply bg-white flex flex-col absolute right-0  overflow-hidden;
  width: 200px;
`;
export const LanguageItem = styled.div`
  @apply text-right p-3 w-full cursor-pointer border-b border-gray-100;
  &:hover {
    @apply bg-gray-100;
  }
`;
