import { styled } from "linaria/lib/react";

export const ActionsContainer = styled.div`
  position: ${({ isSideSticky }) => (isSideSticky ? "fixed" : "static")};
  top: ${({ isSideSticky }) => (isSideSticky ? "110px" : "0")};
  width: 370px;
`;
