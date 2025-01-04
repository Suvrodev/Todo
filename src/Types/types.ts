export interface ITask {
  id: string;
  title: string;
  desc: string;
  dueDate: string;
  isCompleted: boolean;
  priority: TPriority;
}

export type TPriority = "Low" | "Medium" | "High";

export interface IUsers {
  id: string;
  name: string;
}
