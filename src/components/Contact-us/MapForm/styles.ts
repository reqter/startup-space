import { styled } from "linaria/lib/react";

export const MapFormContainer = styled.p`
  @apply flex mt-16 flex-row;
  @screen phone {
    @apply flex-col mt-0;
  }
`;
