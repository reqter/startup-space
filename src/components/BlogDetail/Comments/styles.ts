import { styled } from "linaria/lib/react";

export const CommentsContainer = styled.div`
  @apply flex flex-col mt-8;
`;
export const Title = styled.div`
  @apply font-semibold text-2xl;
`;
export const CommentItemWrpapper = styled.div`
  @apply flex mt-8;
`;

export const Info = styled.div`
  @apply flex flex-col;
`;
export const Name = styled.div`
  @apply;
`;
export const Date = styled.div`
  @apply text-gray-500 my-2 text-xs;
`;
export const Message = styled.div`
  @apply text-gray-700 text-sm text-justify;
  padding-inline-end: 10px;
`;
export const LoadMore = styled.button`
  @apply bg-gray-200 flex justify-center items-center mt-10 text-sm font-bold py-2 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-gray-300 transition ease-in duration-200;
  }
`;
