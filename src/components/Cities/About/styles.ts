import { styled } from "linaria/lib/react";
export const Wrapper = styled.div`
  @apply flex mb-4;
`;

export const ImageBox = styled.div`
  @apply flex border border-gray-100 shadow rounded p-2;
  height: 120px;
  width: 120px;
`;

export const Logo = styled.img`
  @apply w-full h-full bg-cover rounded;
`;

export const TextBox = styled.div`
  @apply flex flex-col;
  margin-inline-start: 15px;
`;

export const CityName = styled.h1`
  @apply text-3xl font-semibold;
`;
export const CityFullName = styled.h2`
  @apply flex;
`;
