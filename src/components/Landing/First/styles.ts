import { styled } from "linaria/lib/react";

export const Wrapper = styled.header`
  @apply w-full bg-fixed;
  margin-top: 0px;
  z-index: 1;
  background-image: ${({ bgImage }) => `linear-gradient(
      to right bottom,
      rgba(8, 21, 38, 0.35),
      rgba(8, 21, 38, 0.35)
    ),url(${bgImage})`};
`;

export const Content = styled.div`
  @apply max-w-6xl flex m-auto flex-col items-center pt-48 pb-20;
  @screen tab-port {
    @apply px-5;
  }
`;
export const Title = styled.div`
  @apply text-5xl font-semibold mb-2 text-white;
`;
export const Description = styled.div`
  @apply text-sm text-white mb-4;
`;
