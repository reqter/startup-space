import { styled } from "linaria/lib/react";

export const Layout = styled.div`
  @apply bg-white w-full p-8 overflow-hidden shadow rounded;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  margin-bottom: 35px;
  min-height: 200px;
  ${".leaflet-container"} {
    height: 85%;
  }
  @screen tab-port {
    @apply p-4;
  }
`;

export const Header = styled.div`
  @apply flex items-start;
  @screen tab-port {
    @apply flex-col
  }
`;

export const Title = styled.div`
  @apply flex-1 font-semibold text-2xl mb-6;
`;
