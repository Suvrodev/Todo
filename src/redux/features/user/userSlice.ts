import { IUsers } from "@/Types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  users: IUsers[];
}

const initialState: IUserState = {
  users: [
    {
      id: "1",
      name: "Suvrodeb",
    },
    {
      id: "2",
      name: "Redux",
    },
    {
      id: "3",
      name: "Type script",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: () => {},
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
