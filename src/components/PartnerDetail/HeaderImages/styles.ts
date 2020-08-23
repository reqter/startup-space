import { styled } from "linaria/lib/react";
export const Wrapper = styled.div`
  margin-top: 80px;
  height: 420px;
  @apply bg-white flex;
  @screen tab-port {
    height: 300px;
  }
  @screen phone {
    height: 220px;
  }
`;
export const Left = styled.div`
  @apply flex-1 flex;
  margin-inline-end: 1px;
`;
export const ImageLeft = styled.img`
  @apply object-cover w-full;
  height: calc(100% - 0.1px);
  transition: all 0.2s;
  &:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;
export const Right = styled.div`
  @apply flex-1 flex flex-wrap;
  @screen phone {
    @apply hidden;
  }
`;
export const ImageRight = styled.img`
  height: calc(50% - 1px);
  @apply object-cover cursor-pointer;
  width: calc(50% - 1px);
  margin-block-end: 1px;
  margin-inline-end: 1px;
  transition: all 0.2s;
  &:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
`;
