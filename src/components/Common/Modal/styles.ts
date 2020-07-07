import { styled } from "linaria/lib/react";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 10001;
`;
export const ModalBackDrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
  height: 100%;
  width: 100%;
`;
export const ModalContent = styled.div`
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1003;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  background: white;
  outline: 0;
  padding: 20px;
  max-width: 500px;
  animation: fadeInUp 0.5s;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;
