import { styled } from "linaria/lib/react";
export const Main = styled.div`
  @apply flex items-start flex-col;
  margin-top: ${({ isImagesVisible }) => (isImagesVisible ? 0 : "60px")};
`;
export const MapContainer = styled.div`
  height: 300px;
  .leaflet-container {
    height: 100% !important;
  }
`;
