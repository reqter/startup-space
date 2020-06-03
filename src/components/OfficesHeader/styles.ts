import { styled } from "linaria/lib/react";
import { rgba } from "polished";
export const Wrapper = styled.header`
  @apply w-full bg-cover;
  z-index: 1;
  background-image: ${({ bgImage }) =>
    `linear-gradient(to right, ${rgba(theme`colors.blue.500`, 0.92)},${rgba(
      theme`colors.blue.500`,
      0.92
    )}),url(${bgImage})`};
  height: 270px;
  margin-top: 100px;
`;

export const Content = styled.div`
  @apply w-1150 flex m-auto  bg-opacity-75 h-full items-center;
`;

export const Title = styled.h1`
  @apply text-white text-5xl font-bold;
`;
