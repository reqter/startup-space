import { styled } from "linaria/lib/react";

export const ProductContainer = styled.div`
  @apply flex flex-wrap;
`;

export const ProductWrapper = styled.div`
  width: calc(33.33% - 20px);
  margin-inline-end: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  @apply flex-1 bg-gray-300 text-gray-700 text-sm font-bold py-3 rounded transition ease-in duration-200;
  width: 90%;
  margin: 0px 5% 10px 5%;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200 text-white;
  }
  &:first-child {
    @apply mie-5;
  }
`;
