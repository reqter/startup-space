import { styled } from "linaria/lib/react";

export const Wrapper = styled.header`
  @apply w-full bg-fixed;
  margin-top: 0px;
  z-index: 1;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;

export const Content = styled.div`
  @apply max-w-6xl flex m-auto;
  @screen tab-port {
    @apply px-5;
  }
`;
export const Left = styled.div`
  @apply mt-56 w-1/2;
  @screen tab-port {
    @apply mt-32 w-full mb-16;
  }
`;
export const Right = styled.div`
  @apply mt-40  w-1/2;
  @screen tab-port {
    @apply hidden;
  }
`;
export const User = styled.img`
  @apply w-full m-auto;
`;
