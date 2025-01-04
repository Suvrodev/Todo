export interface ITask {
  id: string;
  title: string;
  desc: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
}

// export enum Priority {
//   Low = "Low",
//   Medium = "Medium",
//   High = "High",
// }
