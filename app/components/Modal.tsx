import React from 'react'

interface ModalProps{
    handleShowModal : ()=> void;
    children: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({handleShowModal, children}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={handleShowModal}>X</button>
        <div className="bg-white p-2 rounded-md">
             {children}   
        </div>
      </div>
    </div>
  );
}

export default Modal