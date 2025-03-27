"use client";

import { useProjects } from "@/context/ProjectsContext";
import { getProjects } from "@/lib/supabase/getProjects";
import { Filter } from "@/types/Filter";
import { useState } from "react";

const Filters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("all");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const { setProjects } = useProjects();

  // Search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Status
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  // Price
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "minPrice") {
      setMinPrice(Number(e.target.value));
    } else {
      setMaxPrice(Number(e.target.value));
    }
  };

  // Sending request
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const filters: Filter = {
      searchTerm,
      status,
    };

    if (minPrice && maxPrice) {
      filters.minPrice = minPrice;
      filters.maxPrice = maxPrice;
    }
    console.log(filters);

    const projects = await getProjects(filters);
    console.log(projects);

    setProjects(projects);
  };

  return (
    <div className="md:p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">فیلترها</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="جستجو در پروژه‌ها..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full border p-2 rounded-md"
          />

          <div>
            <h4 className="font-medium">وضعیت پروژه</h4>
            <select
              value={status}
              onChange={handleStatusChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">همه وضعیت‌ها</option>
              <option value="not_started">شروع نشده</option>
              <option value="in_progress">در حال انجام</option>
              <option value="delivered">تمام شده</option>
              <option value="approved">تایید شده</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handlePriceChange}
              placeholder="حداقل قیمت"
              className="w-1/2 border p-2 rounded-md"
            />
            <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handlePriceChange}
              placeholder="حداکثر قیمت"
              className="w-1/2 border p-2 rounded-md"
            />
          </div>

          <div className="mt-4 text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              جستجو
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filters;
