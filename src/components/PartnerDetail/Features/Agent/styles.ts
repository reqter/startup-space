import { styled } from "linaria/lib/react";

export const AgentContainer = styled.div`
  @apply flex;
  @screen phone {
    @apply flex-col;
  }
`;
export const ImageBox = styled.div`
  background-image: ${({ src }) => `url(${src})`};
  @apply relative bg-cover;
  min-height: 280px;
  width: 270px;
  margin-inline-end: 40px;
  @screen phone {
    width: 100%;
    margin-inline-end: 0px;
  }
`;
export const ImageInfo = styled.div`
  @apply absolute bottom-0 w-full p-5 bg-white z-10 flex justify-center items-center bg-opacity-75 text-lg;
  & > * {
    @apply mx-3 text-blue-500;
  }
`;
export const Detail = styled.div`
  @apply flex-1;
`;
export const Name = styled.div`
  @apply font-semibold text-2xl mb-3;
`;
export const DetailRow = styled.div`
  @apply flex items-center text-blue-500 py-3 px-2 mb-1 flex-shrink-0;
  &:nth-child(2n) {
    @apply bg-gray-200;
  }
`;
export const DetailValue = styled.div`
  @apply text-black;
  margin-inline-start: 10px;
`;
