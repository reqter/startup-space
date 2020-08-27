import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex mt-10 flex-row flex-wrap;
`;

export const Content = styled.div`
  @apply absolute h-full w-full flex flex-col justify-end text-white rounded-lg z-20 transition duration-500;
  background-image: linear-gradient(to bottom, transparent 80%, black);
  padding-block-end: 14px;
`;
export const Name = styled.div`
  @apply font-bold text-center text-2xl;
  @screen tab-port {
    @apply text-lg;
  }
`;
export const Location = styled.div`
  @apply text-sm;
`;
export const Image = styled.div`
  @apply bg-cover absolute h-full w-full z-10 rounded-lg transition duration-500;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;
export const CardWrapper = styled.div`
  @apply mb-4 relative rounded-lg cursor-pointer overflow-hidden;
  width: calc(${theme`width.1/4`} - 15px);
  min-height: 250px;
  margin-inline-end: 15px;
  &:hover {
    ${Image} {
      @apply transition duration-500;
      transform: scale(1.1);
    }
    ${Content} {
      @apply transition duration-500;
      background-image: linear-gradient(to bottom, transparent 100%, white);
    }
  }
  @screen tab-port {
    min-height: 150px;
  }
  @screen phone {
    width: calc(${theme`width.1/2`} - 15px);
  }
`;
