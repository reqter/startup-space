import { styled } from "linaria/lib/react";

export const BlogDetailContainer = styled.div`
  @apply flex flex-col bg-white shadow p-5 rounded;
  margin-inline-end: 50px;
`;
export const Image = styled.img`
  @apply bg-cover;
  min-height: 350px;
`;
export const Date = styled.div`
  @apply text-gray-400 my-4;
`;
export const Title = styled.div`
  @apply text-3xl mb-3;
`;
export const Tags = styled.div`
  @apply flex flex-wrap;
`;
export const TagItem = styled.div`
  @apply bg-blue-500 py-1 px-4 text-white text-xs rounded;
  margin-inline-end: ${theme`spacing.2`};
`;
export const Html = styled.div`
  @apply mt-8;
`;

export const CategoriesContainer = styled.div`
  @apply flex mt-5;
`;

export const CategoriesText = styled.div`
  @apply text-gray-700;
  margin-inline-end: 10px;
`;

export const CategoriesList = styled.div`
  @apply flex;
  margin-inline-end: 10px;
`;

export const CategoriesListItem = styled.div`
  @apply text-blue-500;
  margin-inline-end: 5px;
`;
