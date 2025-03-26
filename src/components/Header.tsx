"use client";
import { useModal } from "@/context/ModalContext";

const Header: React.FC = () => {
  const { toggleModal } = useModal();
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">مدیریت پروژه</h1>
        <button
          onClick={toggleModal}
          className="bg-yellow-500 px-4 py-2 rounded-md md:hidden"
        >
          نمایش مودال
        </button>
      </div>
    </header>
  );
};

export default Header;
