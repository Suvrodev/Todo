import { ITask } from "@/Types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

const initialState: IinitialState = {
  tasks: [
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
  filter: "All",
};

// type DraftTask = Pick<ITask, "title" | "desc" | "dueDate" | "priority">;
const createTask = (taskData: Partial<ITask>): Partial<ITask> => {
  const newTask = {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
  return newTask;
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // addTask: (state, action) => {
      const taskData = createTask(action.payload);
      console.log("TaskData: ", taskData);
      if (!taskData.assignedBy) {
        taskData.assignedBy = null;
      }
      state.tasks.push(taskData as ITask);
    },
    toggleCompleteState: (state, action) => {
      const { id, isChecked } = action.payload;
      // console.log("id: ", id);
      // console.log("isChecked: ", isChecked);
      state.tasks.forEach((task) =>
        task.id === id ? (task.isCompleted = isChecked) : task
      );
      // console.log("ALl Task: ", state.tasks);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, taskData } = action.payload;
      // console.log("id: ", id, "data: ", taskData);

      state.tasks.forEach((task) => {
        if (task.id === id) {
          task.title = taskData.title;
          task.desc = taskData.desc;
          task.dueDate = taskData.dueDate;
          task.priority = taskData.priority;
          task.assignedBy = taskData.assignedBy;
        }
      });
    },
    updateFilter: (
      state,
      action: PayloadAction<"High" | "Low" | "Medium" | "All">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  toggleCompleteState,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;
export default taskSlice.reducer;
