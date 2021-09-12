import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react'

export interface ModalProps {
  handleModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalProps> = ({}, ref) => {
  const [state, setState] = useState(false);

  const handleModal = useCallback(() => {
    setState((state) => !state);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      handleModal,
    };
  });

  if (!state) return null;

  return (
    <div
      style={{
        background: "#111",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <button onClick={handleModal} style={{ color: "#222" }}>
        Close modal
      </button>
    </div>
  );
};

export default forwardRef(Modal);
