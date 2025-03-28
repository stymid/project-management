import { Project } from "@/types/project";

export type ProjectsContextType = {
  projects: Project[];
  setProjects: (data: Project[]) => void;
};
