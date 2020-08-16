import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex flex-row;
  @screen tab-port {
    @apply flex-col
  }
`;
