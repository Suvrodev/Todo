import { ITask } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: IinitialState = {
  tasks: [
    {
      id: "1",
      title: "Initialize Fronted",
      desc: "Create Home page and Route",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "2",
      title: "Set up Backend",
      desc: "Configure database and API routes",
      dueDate: "2025-12",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "3",
      title: "Design UI",
      desc: "Create wireframes and finalize design",
      dueDate: "2026-01",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
