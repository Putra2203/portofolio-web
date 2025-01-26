import React from "react";

const Modal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white p-10 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-2 text-red-700 text-2xl"
          onClick={onClose}
        >
          &times; 
        </button>
        <img
          src={image}
          alt="Selected Project"
          className="w-full h-auto max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Modal;
