import { styled } from "linaria/lib/react";

export const Container = styled.div`
  @apply flex mt-10 flex-wrap mli-2 flex-row;
  @screen phone {
    @apply flex-col;
  }
`;

export const Plus = styled.div`
  @apply relative;
  top: 20px;
  &:after {
    @apply absolute bg-gray-200 transition-all duration-500;
    content: "";
    top: 18px;
    width: 40px;
    height: 1px;
    inset-inline-end: 20px;
  }
  &:before {
    @apply absolute bg-gray-200 transition-all duration-500;
    content: "";
    inset-inline-end: 35px;
    width: 1px;
    height: 40px;
  }
`;
export const Location = styled.div`
  @apply absolute font-bold text-white text-xl;
  inset-block-end: 10px;
  inset-inline-start: 30px;
  transition-duration: 0.5s;
  &:after {
    content: "";
    @apply bg-white absolute;
    inset-block-end: -5px;
    inset-inline-start: 0px;
    width: 0;
    height: 1px;
  }
`;
export const Count = styled.div`
  @apply absolute font-bold text-white opacity-0;
  inset-block-end: 2px;
  inset-inline-start: 30px;
  transition-duration: 0.5s;
  transform: ${({ dir }) => {
    return dir === "ltr" ? `translateX(100px)` : `translateX(-100px)`;
  }};
`;

export const CardWrapper = styled.div`
  @apply mb-4 h-64 shadow-lg rounded-lg py-40 bg-cover overflow-hidden relative;
  width: calc(${theme`width.1/4`} - 10px);
  margin-inline-start: 10px;
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  @screen tab-port {
    width: calc(${theme`width.1/2`} - 10px);
  }
  @screen phone {
    @apply w-full;
    margin-inline-start: 0px;
  }
`;
export const Content = styled.div`
  @apply cursor-pointer w-full h-full absolute top-0 transition duration-500;
  background: rgba(0, 0, 0, 0.4);
  &:hover {
    @apply bg-blue-500 transition duration-500;
    ${Plus} {
      &:after {
        width: 70px;
        @apply transition-all duration-500;
      }
      &:before {
        height: 70px;
        @apply transition-all duration-500;
      }
    }
    ${Location} {
      @apply transition-all duration-500;
      transform: translateY(-25px);
      &:after {
        @apply transition-all duration-500 w-full;
      }
    }
    ${Count} {
      @apply transition-all duration-500 opacity-100;
      transform: translateX(0);
    }
  }
`;
