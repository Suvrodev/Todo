import { ITask } from "@/Types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: IinitialState = {
  tasks: [],
  filter: "all",
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
    deleteTask: (state, action) => {
      console.log("id, ", action.payload);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
