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
export const Image = styled.img`
  @apply rounded-full;
  width: 60px;
  height: 60px;
  margin-inline-end: 20px;
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
  @apply text-gray-700;
`;
