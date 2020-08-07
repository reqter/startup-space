import { styled } from "linaria/lib/react";

export const Wrapper = styled.div`
  @apply bg-white py-20 max-w-6xl m-auto px-5;
`;
export const Content = styled.div`
  @apply flex flex-row;
  @screen tab-port {
    @apply flex-col;
  }
`;
export const Left = styled.div`
  @apply w-1/2 flex-shrink-0 flex justify-center;
  @screen tab-port {
    @apply mb-8;
  }
`;
export const Image = styled.img`
  @apply rounded-lg;
  margin-inline-end: 20px;
`;
export const Right = styled.div`
  @apply flex flex-col;
  padding-inline-end: 30px;
`;
export const Title = styled.div`
  @apply;
`;
export const Header = styled.h1`
  @apply text-4xl font-bold;
`;
export const Description = styled.p`
  @apply text-gray-600;
`;
export const Button = styled.button`
  @apply self-start mt-10 bg-blue-500 text-white text-base font-bold py-3 px-5 rounded transition ease-in duration-200;
  &:hover {
    @apply bg-blue-700 transition ease-in duration-200;
  }
`;
