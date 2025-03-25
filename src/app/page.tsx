import { getProjects } from "@/lib/supabase/getProjects";

export default async function HomePage() {
  const projects = await getProjects();
  console.log(projects);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
