import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";
import { currentTheme } from "./../../services/theming";
const { colorPrimaryLight, colorPrimaryDark } = currentTheme;

export const Wrapper = styled.header`
  @apply w-full bg-fixed;
  margin-top: 0px;
  z-index: 1;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;

export const Content = styled.div`
  @apply w-1150 flex m-auto;
`;
export const Left = styled.div`
  @apply mt-64 w-1/2;
`;
export const Right = styled.div`
  @apply mt-40  w-1/2;
`;
export const User = styled.img`
  @apply w-full m-auto;
`;
