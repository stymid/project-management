"use client";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/context/ProjectsContext";
import { getProjects } from "@/lib/supabase/getProjects";
import { Project } from "@/types/project";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { projects, setProjects } = useProjects();
  const [isFavoriteFilterActive, setIsFavoriteFilterActive] =
    useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects({});
      setProjects(data);
    };
    fetchData();
  }, [setProjects]);

  const filterProjectsByFavorites: () => Project[] = () => {
    if (!isFavoriteFilterActive) return projects;
    return projects.filter((p) =>
      JSON.parse(localStorage.getItem("favorites") || "[]").includes(p.id)
    );
  };
  const filteredProjectsByFavorite = filterProjectsByFavorites();
  return (
    <>
      <div className="flex gap-3.5">
        <input
          type="checkbox"
          id="favoriteCheckBox"
          checked={isFavoriteFilterActive}
          onChange={(e) => setIsFavoriteFilterActive(e.target.checked)}
          className="h-5 w-5 accent-blue-500 focus:ring-2 focus:ring-blue-300 rounded"
        />
        <label
          htmlFor="favoriteCheckBox"
          className="text-lg font-medium text-gray-700"
        >
          فقط پروژه‌های علاقه‌مندی‌ها
        </label>
      </div>
      <h1 className="text-2xl font-bold mb-4">پروژه ها</h1>
      <ul
        className="flex flex-col gap-5
      "
      >
        {filteredProjectsByFavorite.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
