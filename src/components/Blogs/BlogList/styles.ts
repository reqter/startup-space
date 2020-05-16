import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Container = styled.div`
  @apply flex mt-10 flex-wrap mli-2;
`;

export const CardWrapper = styled.div`
  @apply mb-4 rounded-lg ml-3;
  width: calc(${theme`width.1/3`} - ${theme`spacing.3`});
`;
