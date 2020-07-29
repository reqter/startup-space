import { styled } from "linaria/lib/react";
export const ListContainer = styled.div`
  @apply flex-1 flex flex-wrap flex-col;
`;
export const LoadingsContainer = styled.div`
  @apply flex-1 flex flex-wrap content-start;
`;

export const ListItems = styled.div`
  @apply flex-1 flex flex-wrap content-start;
`;

export const PagingContainer = styled.div`
  @apply flex justify-center items-center self-center;
`;

export const Button = styled.button`
  @apply bg-gray-200 text-black text-sm font-bold py-3 rounded transition ease-in duration-200 m-auto mt-5 border border-gray-300;
  &:hover {
    @apply bg-gray-400 transition ease-in duration-200;
  }
  width: ${({ width }) => (width ? width + "px" : "100px")};
  margin-inline-end: 10px;
`;
