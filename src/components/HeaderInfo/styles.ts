import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";
import { currentTheme } from "./../../services/theming";
const { colorPrimaryLight, colorPrimaryDark } = currentTheme;

export const Wrapper = styled.div`
  @apply w-full bg-gray-200 shadow-sm;
`;

export const Content = styled.div`
  @apply w-1150 m-auto h-full flex items-center py-3;
`;
export const PhoneNumber = styled.span`
  @apply text-base pie-5;
`;
export const Email = styled.span`
  @apply text-base;
`;
