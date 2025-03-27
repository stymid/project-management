"use client";
import { useModal } from "@/context/ModalContext";
import { Button } from "@headlessui/react";

const Header: React.FC = () => {
  const { toggleModal } = useModal();
  return (
    <header className="border-b border-gray-100  p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">مدیریت پروژه</h1>
        <Button
          onClick={toggleModal}
          className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 md:hidden"
        >
          فیلتر
        </Button>
      </div>
    </header>
  );
};

export default Header;
