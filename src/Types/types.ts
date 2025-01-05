export interface ITask {
  id: string;
  title: string;
  desc: string;
  dueDate: string;
  isCompleted: boolean;
  priority: TPriority;
  assignedBy: string | null;
}

export type TPriority = "Low" | "Medium" | "High";

export interface IUsers {
  id: string;
  name: string;
}

export interface IMission {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: TMissionPriority;
}
export type TMissionPriority = "low" | "medium" | "high";
