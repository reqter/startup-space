import { styled } from "linaria/lib/react";

export const Title = styled.div`
  @apply flex-1 font-semibold text-2xl mb-6;
`;
export const Description = styled.p`
  @apply text-lg mb-2;
`;

export const Button = styled.button`
  @apply flex-1 bg-blue-500 text-white text-sm font-bold py-3 px-6 rounded transition ease-in duration-200 mb-10;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
  &:first-child {
    @apply mie-5;
  }
`;

export const CommentsWrapper = styled.div`
  @apply mb-10;
`;
export const CommentWrapper = styled.div`
  @apply py-4 border-b border-solid border-gray-300;
  &:last-child {
    @apply border-none;
  }
`;
export const Top = styled.div`
  @apply flex items-center mb-3;
`;
export const Profile = styled.img`
  width: 55px;
  height: 55px;
  @apply rounded-full mie-3;
`;
export const Info = styled.div`
  @apply flex flex-col flex-1;
`;
export const Name = styled.div`
  @apply font-semibold;
`;
export const Date = styled.div`
  @apply text-xs;
`;
export const Text = styled.p`
  @apply text-sm text-gray-800;
`;
