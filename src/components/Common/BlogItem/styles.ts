import { styled } from "linaria/lib/react";

export const CardWrapper = styled.div`
  @apply mb-8 rounded-lg rounded overflow-hidden shadow bg-white;
  margin-inline-end: 1rem;
  max-height: 450px;
  width: ${({ colSpan }) =>
    colSpan === 2
      ? `calc(${theme`width.1/2`} - ${theme`spacing.4`})`
      : `calc(${theme`width.1/3`} - ${theme`spacing.4`})`};
`;
