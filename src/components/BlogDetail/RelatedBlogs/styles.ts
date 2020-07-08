import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex flex-col mt-8;
`;
export const Title = styled.div`
  @apply font-semibold text-2xl;
`;

export const RelatedList = styled.div`
  @apply flex mt-5;
`;

export const Content = styled.div`
  @apply absolute h-full w-full flex flex-col justify-end text-white rounded-lg z-20 transition duration-500;
  background-image: linear-gradient(to bottom, transparent 40%, black);
  padding-inline-start: 30px;
  padding-block-end: 14px;
`;
export const Name = styled.div`
  @apply font-bold;
`;
export const MetaData = styled.div`
  @apply flex mb-3 items-center;
`;
export const Category = styled.div`
  @apply bg-blue-500 px-4 py-1 text-xs rounded;
  margin-inline-end: 10px;
`;
export const Date = styled.div`
  @apply text-gray-200 text-xs;
`;
export const Image = styled.div`
  @apply bg-cover absolute h-full w-full z-10 rounded-lg transition duration-500;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;
export const CardWrapper = styled.a`
  @apply mb-4 relative rounded-lg cursor-pointer overflow-hidden;
  width: 33.333%;
  height: 350px;
  margin-inline-end: 30px;
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
`;
