export type ProjectStatus =
  | "not_started"
  | "in_progress"
  | "delivered"
  | "approved";

export interface Project {
  id: number;
  name: string;
  description: string;
  creator: string;
  duration: number;
  endـdate: string;
  price: number;
  status: ProjectStatus;
  createdAt: string;
}
