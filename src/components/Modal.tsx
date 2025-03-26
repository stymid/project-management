"use client";

import { useModal } from "@/context/ModalContext";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isModalOpen } = useModal();

  return (
    isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500/55 z-50 md:hidden">
        <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
