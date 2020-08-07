import { styled } from "linaria/lib/react";
export const GalleryWrapper = styled.div`
  margin-top: 80px;
  img {
    object-fit: cover !important;
  }
  height: ${({ length }) => (length ? "500px" : 0)};
`;
