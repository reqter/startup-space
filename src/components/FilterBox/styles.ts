import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Wrapper = styled.div`
  @apply shadow rounded-lg p-2 w-10/12;
  background-color: rgba(255, 255, 255, 0.2);
`;
export const Content = styled.div`
  @apply bg-white p-56 rounded-lg;
`;

// ${screen`md`} {
//     ${apply`mt-20 p-20`}
//   }
