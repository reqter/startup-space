import { styled } from "linaria/lib/react";

export const SideBarContainer = styled.div`
  @apply flex flex-col flex-shrink-0;
  width: 350px;
  @screen tab-port {
    @apply order-1 flex-row;
    width: auto;
  }
`;
