import { styled } from "linaria/lib/react";

export const Video = styled.video`
  @apply mb-5 bg-gray-100 border-dashed border-2 border-gray-300;
  max-height: 450px;
  &:focus {
    @apply outline-none;
  }
`;

export const Paragraph = styled.div`
  @apply leading-relaxed;
  white-space: pre-wrap;
`;
