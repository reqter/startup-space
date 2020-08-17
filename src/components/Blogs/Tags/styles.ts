import { styled } from "linaria/lib/react";

export const TagsContainer = styled.div`
  @apply flex flex-wrap;
  @screen tab-port {
    @apply flex-1;
  }
  @screen phone {
    @apply hidden;
  }
`;
export const TagItemWrapper = styled.h4`
  @apply rounded-sm bg-gray-200 text-gray-800 px-3 py-2 mb-3 text-xs cursor-pointer;
  margin-inline-end: 10px;
`;
