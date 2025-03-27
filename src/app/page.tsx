import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/supabase/getProjects";

export default async function HomePage() {
  const projects = await getProjects();
  console.log(projects);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">پروژه ها</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );
}
