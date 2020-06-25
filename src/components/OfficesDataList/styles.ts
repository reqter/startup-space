import { styled } from "linaria/lib/react";
export const Content = styled.div`
  @apply flex items-start relative;
  flex-direction: ${({ isSideSticky }) =>
    isSideSticky ? "row-reverse" : "row"};
`;
