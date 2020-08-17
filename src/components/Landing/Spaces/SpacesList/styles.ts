import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex mt-10 flex-row;
  @screen phone {
    @apply flex-col;
  }
`;
export const Left = styled.div`
  @apply w-2/3 flex flex-wrap justify-between;
  padding-inline-end: 15px;
  @screen phone {
    @apply w-full;
    padding-inline-end: 0;
  }
`;
export const Right = styled.div`
  @apply w-2/6 flex;
  @screen phone {
    @apply w-full;
  }
`;

export const Content = styled.div`
  @apply absolute h-full w-full flex flex-col justify-end text-white rounded-lg z-20 transition duration-500;
  background-image: linear-gradient(to bottom, transparent 80%, black);
  padding-inline-start: 30px;
  padding-block-end: 14px;
`;
export const Name = styled.div`
  @apply font-bold;
`;
export const Location = styled.div`
  @apply text-sm;
`;
export const Image = styled.div`
  @apply bg-cover absolute h-full w-full z-10 rounded-lg transition duration-500;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;
export const CardWrapper = styled.a`
  @apply mb-4 relative rounded-lg cursor-pointer overflow-hidden;
  width: ${({ colSpan, hasMargin }) =>
    !colSpan
      ? `${theme`width.full`}`
      : colSpan === 1
      ? hasMargin
        ? `calc(${theme`width.1/2`} - 15px)`
        : theme`width.1/2`
      : colSpan == 2
      ? theme`width.full`
      : theme`width.full`};
  min-height: 300px;
  &:hover {
    ${Image} {
      @apply transition duration-500;
      transform: scale(1.1);
    }
    ${Content} {
      @apply transition duration-500;
      background-image: linear-gradient(to bottom, transparent 60%, black);
    }
  }
  @screen phone {
    width: 100%;
  }
`;
