import React from "react";
import { styled } from "linaria/lib/react";
export const Box = styled.div`
  @apply w-12 bg-blue-500 h-1 my-8;
`;
const Divider = () => {
  return <Box />;
};
export default Divider;
