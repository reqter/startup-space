import { styled } from "linaria/lib/react";
export const SummeryWrapper = styled.div`
  @apply bg-white;
`;
export const Content = styled.div`
  @apply flex max-w-6xl m-auto py-10;
  @screen tab-land {
    @apply px-5;
  }
  @screen tab-port {
    @apply flex-col py-5;
  }
`;
export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-inline-end: 10px;
  box-shadow: 0 0 5px lightgray;
  border-radius: 5px;
  padding: 5px;
  @screen phone {
    width: 60px;
    height: 60px;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const Left = styled.div`
  @apply flex-1 flex items-center;
`;
export const PartnerInfo = styled.div`
  @apply flex-1;
`;
export const Right = styled.div`
  @apply flex items-center flex-col;
`;
export const Name = styled.div`
  @apply font-semibold text-4xl;
  @screen phone {
    @apply text-lg;
  }
`;
export const Location = styled.div`
  @apply flex h-10 items-center text-sm;
  @screen phone {
    @apply mt-4;
  }
`;
export const Actions = styled.div`
  @apply flex items-center flex-wrap;
  @screen phone {
    @apply items-start mt-5;
  }
`;
export const BoxInfo = styled.a`
  @apply font-semibold border-dashed border border-gray-500 mx-3 flex  items-center justify-center px-4 rounded cursor-pointer;
  min-width: 60px;
  min-height: 40px;
  @screen phone {
    @apply mx-1 mb-2;
  }
`;

export const Website = styled.a`
  @apply text-lg text-blue-400  relative w-full mt-5;
`;
export const Link = styled.span`
  @apply absolute left-0 mx-3;
`;
