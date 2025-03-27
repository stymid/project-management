"use client";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/context/ProjectsContext";
import { getProjects } from "@/lib/supabase/getProjects";
import { useEffect } from "react";

export default function HomePage() {
  const { projects, setProjects } = useProjects();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects({});
      setProjects(data);
    };
    fetchData();
  }, [setProjects]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">پروژه ها</h1>
      <ul
        className="flex flex-col gap-5
      "
      >
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
