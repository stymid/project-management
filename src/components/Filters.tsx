"use client";

import { useModal } from "@/context/ModalContext";

const Filters = () => {
  const { toggleModal } = useModal();
  return (
    <div className="md:p-4">
      <div className="flex justify-between items-center ">
        <h3 className="text-xl font-semibold">فیلترها</h3>
        <button className="md:hidden" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="جستجوی پروژه..."
          className="w-full border p-2 rounded-md"
        />
        <div>
          <h4 className="font-medium">وضعیت پروژه</h4>
          <select className="w-full border p-2 rounded-md">
            <option>همه</option>
            <option>در حال انجام</option>
            <option>تایید شده</option>
          </select>
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="favorite" />
          <label htmlFor="favorite" className="ml-2">
            فقط علاقه‌مندی‌ها
          </label>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md md:hidden"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
