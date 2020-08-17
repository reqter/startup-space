import { styled } from "linaria/lib/react";

export const AmenitiesContainer = styled.div`
  @apply flex flex-wrap;
  @screen phone {
    @apply flex-col
  }
`;
export const Amenit = styled.div`
  @apply flex w-1/2 h-12 items-center text-3xl text-blue-500;
  @screen phone {
    @apply w-full
  }
`;
export const Name = styled.span`
  @apply mx-5 text-base text-black;
`;
