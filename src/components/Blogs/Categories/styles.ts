import { styled } from "linaria/lib/react";

export const CategoriesContainer = styled.div`
  @apply flex flex-col mt-5;
`;
export const CategoryItemWrapper = styled.div`
  @apply flex justify-between border border-gray-100 border-solid py-3 cursor-pointer;
`;
export const Text = styled.div`
  @apply text-blue-400;
`;
export const Count = styled.div`
  @apply text-xs;
`;
