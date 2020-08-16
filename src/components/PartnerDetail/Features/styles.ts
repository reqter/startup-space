import { styled } from "linaria/lib/react";
export const FeaturesWrapper = styled.div`
  @apply flex flex-col flex-1;
  margin-inline-end: ${({ isSideSticky }) => (isSideSticky ? "410px" : "40px")};
  @screen tab-port {
    margin-inline-end: 0;
  }
`;
