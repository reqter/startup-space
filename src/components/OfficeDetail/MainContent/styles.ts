import { styled } from "linaria/lib/react";
export const Main = styled.div`
  @apply flex items-start relative;
  flex-direction: ${({ isSideSticky }) =>
    isSideSticky ? "row-reverse" : "row"};
`;
