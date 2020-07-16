import { styled } from "linaria/lib/react";

export const Wrapper = styled.div`
  @apply shadow-none  overflow-auto;
  width: 400px;
  border-radius: 2px;
  border: 1px solid #f2f2f2;
  box-shadow: none;

  position: ${({ isSideSticky, isVisibleFooter }) =>
    isVisibleFooter ? "absolute" : isSideSticky ? "fixed" : "static"};
  top: ${({ isSideSticky, isVisibleFooter }) =>
    isVisibleFooter ? "auto" : isSideSticky ? "110px" : "0"};
  bottom: ${({ isVisibleFooter }) => (isVisibleFooter ? "15px" : "auto")};
`;
export const Content = styled.div`
  @apply bg-white py-6 rounded-lg px-8;
`;
export const Title = styled.h4`
  @apply font-semibold text-black text-2xl mb-1 relative;
`;
export const Divider = styled.div`
  @apply bg-gray-200 w-full relative mt-2 mb-5;
  height: 2px;
  &:after {
    content: "";
    @apply absolute bg-blue-500 w-1/3 top-0;
    height: 2px;
    inset-inline-start: 0;
    z-index: 1;
  }
`;

export const Actions = styled.div`
  @apply flex items-center;
`;
export const ActionsTitle = styled.h4`
  @apply mt-5 mb-2;
`;

export const Button = styled.button`
  @apply flex-1 bg-blue-500 text-white text-sm font-bold py-3 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
