import { styled } from "linaria/lib/react";

export const CardWrapper = styled.div`
  @apply mb-8 rounded-lg ml-4;
  width: calc(${theme`width.1/3`} - ${theme`spacing.4`});
`;
