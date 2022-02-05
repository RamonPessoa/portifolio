import React, { createContext, useContext, useState } from 'react';

type myContext = {
  showModal: boolean;
  setShowModal?: Function;
};

const modalContext = createContext<myContext>({ showModal: false });

type myProps = {
  children: React.ReactNode;
};

export default function ModalContext(props: myProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <modalContext.Provider value={{ showModal, setShowModal }}>
      {props.children}
    </modalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(modalContext);
  const { showModal, setShowModal } = context;

  const handleClick = (e: React.MouseEvent) => {
    if (setShowModal) {
      if ((e.target as Element).classList.contains('show-hide')) {
        setShowModal(!showModal);
      }
    }
  };

  return { showModal, handleClick };
}
