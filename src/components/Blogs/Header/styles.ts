import { styled } from "linaria/lib/react";

export const Content = styled.div`
  @apply absolute h-full w-full z-20 transition duration-500;
  background-image: linear-gradient(to bottom, transparent 80%, black);
`;
export const TextContainer = styled.div`
  @apply w-1150 h-full m-auto flex flex-col justify-end text-white pb-12;
`;
export const Name = styled.div`
  @apply font-bold text-3xl;
`;
export const Location = styled.div`
  @apply text-sm;
`;
export const Image = styled.div`
  @apply bg-cover absolute h-full w-full z-10 transition duration-500;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;
export const Wrapper = styled.div`
  @apply relative cursor-pointer overflow-hidden w-full;
  height: 350px;
  margin-top: 100px;
  &:hover {
    ${Content} {
      @apply transition duration-500;
      background-image: linear-gradient(to bottom, transparent 60%, black);
    }
  }
`;
