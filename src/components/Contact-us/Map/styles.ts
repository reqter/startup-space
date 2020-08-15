import { styled } from "linaria/lib/react";

export const MapContainer = styled.p`
  @apply w-1/2 bg-white p-2 flex;
  margin-inline-end: 20px;
  @screen phone {
    @apply w-full mb-5;
    height:300px;
    margin-inline-end: 0px;
  }
`;
