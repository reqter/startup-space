import { styled } from "linaria/lib/react";
import { lighten, modularScale, rgba } from "polished";

export const Top = styled.div`
  @apply bg-opacity-0 opacity-0 w-full flex justify-center items-center text-white text-lg font-bold  transition duration-500 z-10;
  height: 80%;
  transform: ${({ dir }) =>
    dir === "ltr" ? `rotateZ(90deg)` : `rotateZ(-90deg)`};
  transform-origin: ${({ dir }) =>
    dir === "ltr" ? "bottom left" : "bottom right"};
`;
export const Bottom = styled.div`
  @apply bg-black text-center w-full flex flex-col justify-center z-20;
  height: 20%;
`;
export const Name = styled.div`
  @apply text-white font-bold text-2xl block;
`;
export const Role = styled.div`
  @apply text-white;
`;
export const CardWrapper = styled.div`
  @apply shadow-lg rounded-lg  bg-cover overflow-hidden relative flex flex-col cursor-pointer;
  width: calc(${theme`width.1/3`} - 25px);
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  height: 500px;
  margin-inline-end: 25px;
  &:hover {
    ${Top} {
      @apply opacity-100 bg-blue-500 bg-opacity-75 transition duration-500;
      transform: rotate(0deg);
    }
  }
`;

export const Container = styled.div`
  @apply flex mt-10 flex-wrap mli-2;
`;
