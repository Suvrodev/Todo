import { ITask } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  mission: ITask[];
}
const initialState: IInitialState = {
  mission: [
    {
      id: "1",
      title: "Title-1",
      desc: "Title-1 Desc",
      dueDate: "1/1/25",
      isCompleted: true,
      priority: "High",
      assignedBy: "1",
    },
    {
      id: "2",
      title: "Title-2",
      desc: "Title-2 Desc",
      dueDate: "1/12/24",
      isCompleted: true,
      priority: "Medium",
      assignedBy: "3",
    },
    {
      id: "3",
      title: "Title-3",
      desc: "Title-1 Desc",
      dueDate: "2/1/25",
      isCompleted: true,
      priority: "Low",
      assignedBy: "3",
    },
    {
      id: "4",
      title: "Title-4",
      desc: "Title-1 Desc",
      dueDate: "10/1/25",
      isCompleted: true,
      priority: "High",
      assignedBy: "2",
    },
  ],
};

export const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {},
});

// export const {} = missionSlice.actions;
export default missionSlice.reducer;
