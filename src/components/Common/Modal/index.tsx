import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalWrapper, ModalBackDrop, ModalContent } from "./styles";

let toggleModal = (props?): void => null;

const Modal = () => {
  const [showAlert, _toggleModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<{ render: () => void }>();
  useEffect(() => {
    if (showAlert) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [showAlert]);

  toggleModal = (props?) => {
    setModalInfo(props);
    _toggleModal((prev) => !prev);
  };
  function handleCloseModal() {
    _toggleModal((prev) => !prev);
  }

  return showAlert
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalWrapper>
            <ModalBackDrop onClick={handleCloseModal} />
            <ModalContent>
              {modalInfo && modalInfo.render ? modalInfo.render() : null}
            </ModalContent>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export { Modal, toggleModal };
