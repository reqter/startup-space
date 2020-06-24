import { styled } from "linaria/lib/react";

export const ActionsContainer = styled.div`
  position: ${({ isSideSticky, isVisibleFooter }) =>
    isVisibleFooter ? "absolute" : isSideSticky ? "fixed" : "static"};
  top: ${({ isSideSticky, isVisibleFooter }) =>
    isVisibleFooter ? "auto" : isSideSticky ? "110px" : "0"};
  width: 370px;
  bottom: ${({ isVisibleFooter }) => (isVisibleFooter ? "0" : "auto")};
`;
