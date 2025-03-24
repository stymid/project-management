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
  end_date: string; // یا Date
  price: number;
  status: ProjectStatus;
  created_at: string;
}
