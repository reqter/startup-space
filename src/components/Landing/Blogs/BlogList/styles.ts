import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex mt-10 flex-wrap mli-2 flex-row;
  @screen tab-port {
    @apply flex-col;
  }
`;
