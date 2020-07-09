import { styled } from "linaria/lib/react";

export const PopularItemWrapper = styled.div`
  @apply flex mb-5 cursor-pointer;
  &:first-child {
    margin-top: 30px;
  }
`;
export const Image = styled.img`
  width: 90px;
  height: 70px;
  border-radius: 5px;
  margin-inline-end: 20px;
`;
export const Text = styled.div`
  @apply text-sm;
`;
