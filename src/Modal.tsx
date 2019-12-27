import React, { useRef, useEffect, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    if (!modalRoot) return;
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, [modalRoot]);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;