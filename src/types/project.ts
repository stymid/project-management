export type ProjectStatus =
  | "not_started"
  | "in_progress"
  | "delivered"
  | "approved";

export interface Project {
  id: string;
  name: string;
  description: string;
  creator: string;
  duration: number;
  endDate: string;
  price: number;
  status: ProjectStatus;
  createdAt: string;
}
