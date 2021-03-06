import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Wrapper = styled.div`
  background: ${({ bgColor, bgImage }) =>
    bgImage ? `url(${bgImage})` : bgColor ? bgColor : theme`colors.white`};
  @apply py-20 bg-cover;
`;
export const Content = styled.div`
  @apply flex flex-col w-1150 m-auto;
`;

export const Title = styled.div`
  @apply self-center;
`;
export const Header = styled.h1`
  @apply text-4xl font-bold self-center mt-4;
`;
export const Divider = styled.div`
  @apply w-12 bg-blue-500 h-1 my-8 self-center relative;
  &::after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 100%;
    left: -10px;
    @apply bg-blue-500 absolute;
  }
  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 100%;
    right: -10px;
    @apply bg-blue-500 absolute;
  }
`;
